import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// this method will create a new todo and save it to the DB
export default async (req, res) => {
  const todo = await prisma.todo.create({
    data: { ...req.body },
  });
  res.status(201).json({ ...todo });
};
