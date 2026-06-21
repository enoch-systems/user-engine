import { Request, Response, NextFunction } from "express";
import { createUser, getUsers } from "../services/user.service";
import { createUserSchema } from "../validators/user.validator";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = createUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        error: result.error.format(),
      });
    }

    const { name, email, password } = result.data;

    const user = await createUser(name, email, password);

    res.json({
      message: "User created",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsers();

    res.json({
      data: users,
    });
  } catch (error) {
    next(error);
  }
};