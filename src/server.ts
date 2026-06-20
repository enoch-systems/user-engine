import express from "express";
import { createUser, getUsers } from "./services/user.service";

const app = express();

app.use(express.json());



app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await createUser(name, email);

    res.json({
      message: "User created",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});



app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();

    res.json({ data: users });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

