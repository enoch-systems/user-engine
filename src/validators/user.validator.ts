import { z } from "zod"; //Give me tools to define and validate data rules.

export const createUserSchema = z.object({   //“This is what a valid user input must look like.”
  name: z.string().min(2),       //Rules for name: must be a string, must have at least 2 characters
  email: z.string().email(),      //Rules for name: must be a string, must follow email format (must contain @, domain, etc.)
  password: z.string().min(6),    //Rules for password: must be a string, must have at least 6 characters
});  //This is the full structure of a valid user input

