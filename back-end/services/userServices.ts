import Users, { I_UserDocument } from "../model/users";
import { DocumentDefinition } from "mongoose";
import bcryptjs from "bcryptjs";

async function findUserByEmail(
  email: String
): Promise<DocumentDefinition<I_UserDocument>[]> {
  return Users.find({ email });
}
async function findAllUsers(): Promise<DocumentDefinition<I_UserDocument>[]> {
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

async function login(email: string, password: string) {
  try {
    const foundUser = await Users.findOne({ email });

    if (!foundUser) {
      throw new Error("No user exists");
    }

    const isMatch = bcryptjs.compareSync(password, foundUser.password);

    if (isMatch) {
      return foundUser;
    } else {
      throw new Error("Password is not correct");
    }
  } catch (error) {
    throw error;
  }
}
export { findUserByEmail, findAllUsers, registerUser, login };
