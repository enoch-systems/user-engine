import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); //receiver



/** 
 * CREATE USER (DB)
 */
app.post("/users", async (req, res) => {
  try {
    const user = req.body;

    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });

    res.json({
      message: "User created",
      data: newUser,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});


/**
 * GET ALL USERS (DB)
 */
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json({
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});


