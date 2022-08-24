import { NextFunction, Request, Response } from "express";
import bcryptjs from "bcryptjs";
import {
  findUserByEmail,
  findAllUsers,
  registerUser,
} from "../services/userServices";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const allUsers = await findAllUsers();
  res.json({
    success: true,
    data: allUsers,
  });
  next();
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, phoneNumber, birthday, sex, password } =
    req.body;
  const foundUser = await findUserByEmail(email);

  if (foundUser) {
    res.json({
      success: false,
      data: "User already exists",
    });
  } else {
    const encryptedPassword = await bcryptjs.hash(password, 10);
    const createdUser = await registerUser(
      firstName,
      lastName,
      email,
      phoneNumber,
      birthday,
      sex,
      encryptedPassword
    );

    if (createdUser) {
      res.json({
        success: true,
        message: "User creation was successful",
        data: createdUser,
      });
    } else {
      res.json({
        success: false,
        message: "User creation was unsuccesful",
        data: {},
      });
    }
  }
};

export default { getUsers, createUser };
