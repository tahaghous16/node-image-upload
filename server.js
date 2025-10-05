import express from "express";
import connectDB from "./utils/connetion.js";
import userRouter from "./router/user.route.js";

const app = express();

app.use(express.json());

app.use("/api", userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

connectDB();
