import Users from "../model/users";
import { NextFunction, Request, Response } from "express";

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  Users.find({}, (err: Error, data: any) => {
    if (err) {
      return err;
    }
    res.json({
      data: data,
    });
  });
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, phoneNumber, birthday, sex, password } =
    req.body;
  console.log(firstName);

  const foundUser = await Users.findOne({
    email: email,
  });

  console.log(foundUser);

  if (foundUser) {
    res.json({
      success: false,
      data: "User already exists",
    });
  } else {
    const createdUser = await Users.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      birthday,
      sex,
      password,
    });

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
