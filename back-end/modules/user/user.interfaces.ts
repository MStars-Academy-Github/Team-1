import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  phoneNumber: number;
  sex: string;
  password: string;
}

export interface I_UserDocument extends IUser, Document {
  isPasswordMatch(password: string): Promise<boolean>;
}
export interface IUserModel extends Model<I_UserDocument> {
  isEmailTaken(
    email: string,
    excludeUserId?: mongoose.Types.ObjectId
  ): Promise<boolean>;
  paginate(
    filter: Record<string, any>,
    options: Record<string, any>
  ): Promise<QueryResult>;
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
