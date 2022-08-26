import { NextFunction, Request, Response } from "express";
import bcryptjs from "bcryptjs";
import * as userServices from "./user.service";
import { getErrorMessage } from "../../util/errors.util";
import catchAsync from "../utils/catchAsync";
import pick from "../utils/pick";
import ApiError from "../errors/ApiError";
import httpStatus from "http-status";

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.findAllUsers();
  console.log(result);
  res.send(result);
});

const getUserByEmail = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(req.body);
  const user = await userServices.findUserByEmail(email);
  console.log(user);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not Found");
  }
  res.send({
    email: user?.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
    age: user?.lastName,
    birthday: user.birthday,
    phoneNumber: user.phoneNumber,
    sex: user.sex,
  });
});

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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
  }
);

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
