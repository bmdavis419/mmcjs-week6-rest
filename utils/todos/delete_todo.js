import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// this method will create a new todo and save it to the DB
export default async (req, res) => {
	const { id } = req.query;

	const deleteTodo = await prisma.todo.delete({
		where: {
			id: parseInt(id),
		},
	});

	res.status(202).json({ ...deleteTodo });
};
