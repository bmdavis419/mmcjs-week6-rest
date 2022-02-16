import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { id } = req.query;
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({ ...todo });
};
