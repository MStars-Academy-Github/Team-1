import { Request, Response } from "express";
import { authService } from "../auth";
import { tokenService } from "../token";
import * as userService from "./user.services";

export const createUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const user = await userService.createUser(req.body);
  res.send(user);
};

export const loginUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await authService.loginUser(email, password);
  console.log(user);
  const tokens = await tokenService.generateAuthToken(user);
  console.log(tokens);

  res.send({ user, tokens });
};
