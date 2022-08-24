import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
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

const Users = mongoose.model("users", UsersSchema);

export default Users;
