import { Request, Response } from "express";
import formidable, { Fields } from "formidable";
import { GridFSBucket } from "mongodb";
import mongoose from "mongoose";
import { User } from "../user";
import Media from "./media.model";
import fs from "fs";

let gridfs: GridFSBucket;
mongoose.connection.on("connected", () => {
  gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
});

export const createMedia = async (req: Request, res: Response) => {
  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields: Fields, files: any) => {
    if (err) {
      return res.status(400).json({
        error: "Video could not be uploaded",
      });
    }
    const user = await User.findById("630ee08f072342f9493c57fe");
    let media = new Media(fields);
    media.postedBy = user?.id;
    const file = files["media"];

    if (file) {
      let writeStream = gridfs.openUploadStream(media._id.toString(), {
        contentType: "binary/octet-stream",
      });
      fs.createReadStream(file.filepath).pipe(writeStream);
    }
    try {
      let result = await media.save();
      res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        error: "Error during file upload",
      });
    }
  });
};

export const mediaById = async (req: Request, res: Response) => {
  const { mediaId } = req.params;
  const range = req.headers["range"];
  try {
    let media = await Media.findById(mediaId)
      .populate("postedBy", "_id firstName")
      .exec();
    let files = await gridfs
      .find({ filename: media?._id.toString() })
      .toArray();
    let file = files[0];

    if (range && typeof range === "string") {
      const parts = range.replace(/bytes=/, "").split("-");
      const partialStart = parts[0];
      const partialEnd = parts[1];
      const start = parseInt(partialStart, 10);
      const end = partialEnd ? parseInt(partialEnd, 10) : file.length - 1;
      const chunkSize = end - start + 1;
      res.writeHead(206, {
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Range": "bytes " + start + "-" + end + "/" + file.length,
        "Content-Type": file.contentType,
      });

      let downloadStream = gridfs.openDownloadStream(file._id, {
        start,
        end: end + 1,
      });
      downloadStream.pipe(res);
      downloadStream.on("error", () => {
        res.sendStatus(404);
      });
      downloadStream.on("end", () => {
        res.end();
      });
    } else {
      /// whole chunk of videos
      res.header("Content-Length", file.length.toString());
      res.header("Content-Type", file.contentType);

      let downloadStream = gridfs.openDownloadStream(file._id);
      downloadStream.pipe(res);
      downloadStream.on("error", () => {
        res.sendStatus(404);
      });
      downloadStream.on("end", () => {
        res.end();
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: "Could not retrieve media file",
    });
  }
};

export const listByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    let media = await Media.find({ postedBy: userId });
    res.status(200).json({
      data: media,
    });
  } catch (error) {
    res.status(404).json({
      error: "Could not retrieve media for the user",
    });
  }
};
