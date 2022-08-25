import Users, { I_UserDocument } from "../model/users";
import { DocumentDefinition } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
export const SECRET_KEY: Secret = process.env.TOKEN_KEY || "password";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

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
      const token = jwt.sign(
        { _id: foundUser._id?.toString(), firstName: foundUser.firstName },
        SECRET_KEY,
        {
          expiresIn: "2 days",
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

export { findUserByEmail, findAllUsers, registerUser, login };
