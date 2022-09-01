import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TypoGraphy from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const handleChange = (video: string) => {
  console.log("test");
};
const MediaUpload = () => {
  const [values, setValues] = useState({
    title: "",
    video: {
      name: "",
    },
    description: "",
    genre: "",
    redirect: "false",
    error: "",
    mediaId: "",
  });
  return (
    <Card className="test">
      <CardContent>
        <TypoGraphy>New Video</TypoGraphy>
        <input accept="video/*" type={"file"}></input>
        <label htmlFor="icon-button-file">
          <Button color="secondary">Upload</Button>
        </label>
        <span>{values.video ? values.video.name : ""}</span>
        <TextField
          id="title"
          label="Title"
          value={values.title}
          onChange={handleChange("title")}
          margin="normal"
        ></TextField>
      </CardContent>
    </Card>
  );
};

export default MediaUpload;
