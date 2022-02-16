import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// this method will create a new todo and save it to the DB
export default async (req, res) => {
  const { id } = req.query;

  const updateTodo = await prisma.todo.update({
    where: {
      id: parseInt(id),
    },
    data: {
      ...req.body,
    },
  });

  res.status(201).json({ ...updateTodo });
};
