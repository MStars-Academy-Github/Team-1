import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.body.token;
  const SECRET_KEY = process.env.TOKEN_KEY || "password";
  console.log(token);

  if (!token) {
    return res.status(403).json({
      success: false,
      data: "User token should be provided",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
    (req as CustomRequest).user = decoded;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
  return next();
};
