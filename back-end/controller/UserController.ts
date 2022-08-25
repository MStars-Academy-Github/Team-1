import { NextFunction, Request, Response } from "express";
import bcryptjs from "bcryptjs";
import * as userServices from "../services/UserServices";
import { getErrorMessage } from "../util/errors.util";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const allUsers = await userServices.findAllUsers();
  res.json({
    success: true,
    data: allUsers,
  });
  next();
};

const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  console.log(req.body);
  const user = await userServices.findUserByEmail(email);
  res.json({
    success: true,
    data: {
      email: user[0]?.email,
      firstName: user[0]?.firstName,
      lastName: user[0]?.lastName,
      age: user[0]?.lastName,
      birthday: user[0].birthday,
      phoneNumber: user[0].phoneNumber,
      sex: user[0].sex,
    },
  });
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

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.query);
  const email = req.query.email as string;
  const body = req.body;
  try {
    const foundUser = await userServices.updateUser(email, body);
    res.status(200).json({ success: true, data: foundUser });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, data: getErrorMessage(error) });
  }
  next();
};
export default { getUsers, createUser, login, getUserByEmail, updateUser };
