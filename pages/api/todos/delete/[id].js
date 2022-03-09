import delete_todo from "../../../../utils/todos/delete_todo";

export default async function handler(req, res) {
	await delete_todo(req, res);
}
