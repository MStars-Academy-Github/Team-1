import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TypoGraphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { CardActions, Icon } from "@material-ui/core";
import { useRouter } from "next/router";
import { any } from "prop-types";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2),
    fontSize: "1em",
  },
  error: {
    verticalAlign: "middle",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  filename: {
    marginLeft: "10px",
  },
}));

const NewMedia = () => {
  const router = useRouter();
  const axios = require("axios").default;
  const classes = useStyles();
  const [values, setValues] = useState({
    title: "",
    video: any,
    description: "",
    genre: "",
    redirect: false,
    error: "",
    mediaId: "",
  });
  useEffect(() => {}, [router]);

  const handleChange = (name: any) => (event: any) => {
    const value = name === "video" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = () => {
    let mediaData = new FormData();
    values.title && mediaData.append("title", values.title);
    values.video && mediaData.append("media", values.video as any);
    values.description && mediaData.append("description", values.description);
    values.genre && mediaData.append("genre", values.genre);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/upload`,
      data: mediaData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((data: any) => {
        setValues({
          ...values,
          error: "",
          mediaId: data?.data._id,
          redirect: true,
        });
      })
      .catch((error: any) => {
        setValues({ ...values, error: error });
      });
  };

  if (values.redirect) {
    router.push("/media/list.media");
  } else {
    return (
      <Card className={classes.card}>
        <CardContent>
          <TypoGraphy
            typeof="headline"
            component={"h1"}
            className={classes.title}
          >
            New Video
          </TypoGraphy>
          <input
            accept="video/*"
            type="file"
            onChange={handleChange("video")}
            className={classes.input}
            id="icon-button-file"
          />
          <label htmlFor="icon-button-file">
            <Button color="secondary" variant="contained" component="span">
              Upload
            </Button>
          </label>
          <span className={classes.filename}>
            {values.video ? values.video?.name : ""}
          </span>
          <br />
          <TextField
            id="title"
            label="Title"
            value={values.title}
            className={classes.textField}
            onChange={handleChange("title")}
            margin="normal"
          />
          <br />
          <TextField
            label="Description"
            multiline
            minRows="2"
            id="description"
            className={classes.textField}
            value={values.description}
            onChange={handleChange("description")}
            margin="normal"
          />
          <br />
          <TextField
            id="genre"
            label="Genre"
            value={values.genre}
            className={classes.textField}
            onChange={handleChange("genre")}
            margin="normal"
          />
          <br />
          {values.error && (
            <TypoGraphy component={"p"} color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
            </TypoGraphy>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className={classes.submit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default NewMedia;
