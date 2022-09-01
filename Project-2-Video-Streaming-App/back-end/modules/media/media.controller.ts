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
    console.log(user);
    console.log(fields);
    let media = new Media(fields);
    console.log(media);
    media.postedBy = user?.id;
    const file = files["media"];
    console.log(file?.filepath);
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

  // res.json("craete media");
};

export const mediaById = async (req: Request, res: Response) => {
  const { mediaId } = req.params;
  try {
    let media = await Media.findById(mediaId)
      .populate("postedBy", "_id firstName")
      .exec();
    console.log(media);
    return res.json({
      data: "media by id",
    });
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
    console.log(media);
    res.status(200).json({
      data: media,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
