import express, { Router } from "express";
import UserController from "../controller/UserController";

const router: Router = express.Router();

router.get("/", UserController.getUsers);
router.post("/register", UserController.createUser);
router.post("/login", UserController.login);

export default router;
