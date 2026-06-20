import express from "express";

const app = express();

app.use(express.json()); //receiver


// fake database (temporary memory)
const users: any[] = [];



/**
 * Create User
 */
app.post("/users", (req, res) => {
  const user = req.body;

  users.push(user);

  res.json({
    message: "User created",
    data: user
  });
});



/**
 * Get all users
 */
app.get("/users", (req, res) => {
  res.json({
    data: users
  });
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});


