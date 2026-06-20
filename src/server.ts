import express from "express";
import { 
  createUserController, getUsersController,
 } from "./controllers/user.controller";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

app.post("/users", createUserController)
app.get("/users", getUsersController)

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

