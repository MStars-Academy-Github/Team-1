import { ImageList, makeStyles, ImageListItem } from "@material-ui/core";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { list } from "../api/api.media";

interface Media {
  created: string;
  description: string;
  genre: string;
  postedBy: string;
  title: string;
  views: number;
  __v: number;
  _id: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const MediaList = () => {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  useEffect(() => {
    (async () => {
      const result = await list({ userId: "630ee08f072342f9493c57fe" });
      setVideos(result);
    })();
  }, []);
  return (
    <ImageList>
      {videos.map((item: Media) => (
        <ImageListItem key={item._id} cols={1} rows={1}>
          <ReactPlayer
            url={`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/video/${item._id}`}
            width="100%"
            height={"inherit"}
            controls={true}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default MediaList;
