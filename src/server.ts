import express from "express";
import {
  createUserController, getUsersController,
 } from "./controllers/user.controller";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

app.post("/users", createUserController)
app.get("/users", getUsersController)

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

