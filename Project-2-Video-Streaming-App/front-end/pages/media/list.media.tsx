import { IconButton, makeStyles } from "@material-ui/core";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
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
    justifyContent: "space-around",
    overflow: "hidden",
    background: theme.palette.background.paper,
    textAlign: "left",
    padding: "8px 16px",
  },
  imageList: {
    width: "100%",
    minHeight: 180,
    padding: "0px 0 10px",
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px `,
    width: "100%",
  },
  tileTitle: {
    fontSize: "1.1rem",
    marginBottom: "5px",
    color: "rgb(193,173, 144)",
    display: "block",
  },
  tileBar: {
    backgroundColor: "rgba(0,0,0,0.72",
    textAlign: "left",
    height: "55px",
  },
  tileGenre: {
    float: "right",
    color: "rgba(193,182,164)",
    marginRight: "8px",
    marginLeft: "15px",
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
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Video image</ListSubheader>
        </ImageListItem>
        {videos.map((item: Media) => (
          <>
            <ImageListItem key={item._id} cols={1} rows={1}>
              <ReactPlayer
                url={`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/video/${item._id}`}
                width="100%"
                height={"inherit"}
                controls={true}
              />
              <ImageListItemBar
                className={classes.tileBar}
                title={item.title}
                subtitle={
                  <span>
                    <span>{item.views}</span>
                    <span className={classes.tileGenre}>
                      <em>{item.genre}</em>
                    </span>
                  </span>
                }
                position="below"
              >
                <IconButton area-label={`info about ${item.title}`}>
                  <InfoIcon></InfoIcon>
                </IconButton>
              </ImageListItemBar>
            </ImageListItem>
          </>
        ))}
      </ImageList>
    </div>
  );
};
export default MediaList;
