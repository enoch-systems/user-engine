import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (name: string, email: string) => {
  return await prisma.user.create({
    data: { name, email },
  });
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};