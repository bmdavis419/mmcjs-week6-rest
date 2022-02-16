import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// this method will get all of the todos for the user
export default async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.status(200).json({ ...todos });
};
