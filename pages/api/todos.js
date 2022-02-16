import get_todos from "../../utils/todos/get_todos";
import post_todos from "../../utils/todos/post_todos";

// CAN VIEW TODOS AT: npx prisma studio

// function to contain all of the methods for todos
export default async function handler(req, res) {
  if (req.method == "POST") {
    await post_todos(req, res);
  } else if (req.method == "GET") {
    await get_todos(req, res);
  } else {
    res.status(404).send("endpoint not found");
  }
}
