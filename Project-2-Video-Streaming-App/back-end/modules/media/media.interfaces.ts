import mongoose, { Model, Document, Types, Schema } from "mongoose";
// Media has
// title
// description
// genre
// views
// postedBy User
// updated
// created
export interface IMedia {
  title: string;
  description: string;
  genre: string;
  views: number;
  postedBy: Schema.Types.ObjectId;
  updated: Date;
  created: Date;
}
export interface IMediaDoc extends IMedia, Document {}

export interface IUserModel extends Model<IMedia | null> {}
