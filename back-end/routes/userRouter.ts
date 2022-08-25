import express, { Router } from "express";
import UserController from "../controller/UserController";
import { auth } from "../middleware/auth";

const router: Router = express.Router();

router.get("/", UserController.getUsers);
router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
router.post("/getUser", auth, UserController.getUserByEmail);
router.put("/user", UserController.updateUser);
export default router;
