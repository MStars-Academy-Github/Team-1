import mongoose, { Types, Schema } from "mongoose";
import { IMediaDoc } from "./media.interfaces";
import { User } from "../user";

// Media has
// title
// description
// genre
// views
// postedBy
// updated
// created

// Mongoose section
const mediaSchema = new Schema<IMediaDoc>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
  postedBy: {
    type: Types.ObjectId,
    ref: User,
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Media = mongoose.model<IMediaDoc>("Media", mediaSchema);
export default Media;