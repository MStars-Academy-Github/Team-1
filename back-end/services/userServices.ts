import Users, { I_UserDocument } from "../model/users";
import { DocumentDefinition } from "mongoose";

async function findUserByEmail(email: String) {
  return Users.find({ email });
}
async function findAllUsers() {
  return await Users.find({});
}

async function registerUser(
  user: DocumentDefinition<I_UserDocument>
): Promise<void> {
  try {
    await Users.create(user);
  } catch (error) {
    throw error;
  }
}

export { findUserByEmail, findAllUsers, registerUser };
