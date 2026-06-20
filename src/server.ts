import express from "express";
import { 
  createUserController, getUsersController,
 } from "./controllers/user.controller";

const app = express();
app.use(express.json());

app.post("/users", createUserController)
app.get("/users", getUsersController)


app.listen(3000, () => {
  console.log("Server running on port 3000");
});

