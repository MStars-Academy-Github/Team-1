import { NextFunction, Request, Response } from "express";
import bcryptjs from "bcryptjs";
import * as userServices from "../services/userServices";
import { getErrorMessage } from "../util/errors.util";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const allUsers = await userServices.findAllUsers();
  res.json({
    success: true,
    data: allUsers,
  });
  next();
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, phoneNumber, birthday, sex, password } =
    req.body;
  const foundUser = await userServices.findUserByEmail(email);

  if (foundUser.length > 0) {
    res.json({
      success: false,
      data: "User already exists",
    });
  } else {
    const encryptedPassword = await bcryptjs.hash(password, 10);
    try {
      await userServices.registerUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        birthday: birthday,
        sex: sex,
        password: encryptedPassword,
      });
      res
        .status(200)
        .json({ success: true, data: "User created successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, data: getErrorMessage(error) });
    }
  }
  next();
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const foundUser = await userServices.login(email, password);
    res.status(200).json({ success: true, data: foundUser });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, data: getErrorMessage(error) });
  }
  next();
};

export default { getUsers, createUser, login };
