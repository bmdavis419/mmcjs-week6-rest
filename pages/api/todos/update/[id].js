import update_todo from "../../../../utils/todos/update_todo";

export default async function handler(req, res) {
  await update_todo(req, res);
}
