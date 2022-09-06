import { Card, CardHeader, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "20px",
  },
  header: {
    padding: "0px 16px 16px 12px",
  },
  action: {
    margin: "24px 20px 16px 0px",
  },
  avatar: {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function MediaPlayer() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="test"></CardHeader>
    </Card>
  );
}
