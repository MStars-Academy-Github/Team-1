import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface I_UserDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  phoneNumber: number;
  sex: string;
  password: string;
}

const UsersSchema: mongoose.Schema<I_UserDocument> = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model<I_UserDocument>("Users", UsersSchema);

export default Users;
