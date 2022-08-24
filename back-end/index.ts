import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./routes/userRouter";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const DB_CONNECTION = process.env.ATLAS_MONGO_CONNECTION || "";

app.use(express.json());
app.use("/users", routes);

mongoose.connect(DB_CONNECTION).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log("Server is listening to the port " + PORT);
  });
});
