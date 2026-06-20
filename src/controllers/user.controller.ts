import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user.service";
import { createUserSchema } from "../validators/user.validator";

export const createUserController = async (
  req: Request,
  res: Response
) => {
  try {
   const result = createUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues,
      });
    }
    
    const { name, email } = req.body;
    const user = await createUser(name, email);

    res.json({
      message: "User created",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsersController = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await getUsers();

    res.json({ data: users });
  } catch (error: any) {
    res.status(500).json({ 
      error: error.message,
     });
  }
};

