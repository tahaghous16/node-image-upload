import express from "express";
import { registerUser } from "../controller/user.controller.js";
import upload from "../middleware/multer.middleware.js";

const userRouter = express.Router();

userRouter.post("/user", upload.single("image"), registerUser);

export default userRouter;
