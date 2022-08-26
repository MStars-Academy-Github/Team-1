import Users, { I_UserDocument } from "./user.interfaces";
import { DocumentDefinition } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
export const SECRET_KEY: Secret = process.env.TOKEN_KEY || "password";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
async function updateUser(
  email: String,
  body: String
): Promise<DocumentDefinition<I_UserDocument>[]> {
  const filter = { email: email };
  const update = body;
  // return Users.findOneAndUpdate(filter, update);
  return [];
}

async function findUserByEmail(
  email: String
): Promise<DocumentDefinition<I_UserDocument> | null> {
  return Users.findOne({ email });
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
    const SECRET_KEY = process.env.TOKEN_KEY || "password";

    if (!foundUser) {
      throw new Error("No user exists");
    }

    const isMatch = bcryptjs.compareSync(password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { userName: foundUser.firstName, email },
        SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      return {
        user: { email: foundUser.email, firstName: foundUser.firstName },
        token: token,
      };
    } else {
      throw new Error("Password is not correct");
    }
  } catch (error) {
    throw error;
  }
}

export { findUserByEmail, findAllUsers, registerUser, login, updateUser };
