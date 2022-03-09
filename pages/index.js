import Todo from "../components/Todo";
import CreateTodo from "../components/CreateTodo";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => setTodos([...todos, todo]);

	const removeTodo = (idx) => {
		let curTodos = todos;
		let removed = curTodos.splice(idx, 1);
		setTodos([...curTodos]);

		// send to DB
		axios.delete(`/api/todos/delete/${removed[0].id}`).then((res) => {
			alert("Deleted Todo");
		});
	};

	const updateTodo = (newContent, idx) => {
		let curTodos = todos;
		curTodos.splice(idx, 1, newContent);
		setTodos([...curTodos]);

		// send to DB
		axios
			.post(`/api/todos/update/${newContent.id}`, {
				name: newContent.name,
				due: newContent.due,
				details: newContent.details,
			})
			.then((res) => {
				alert("Updated Todo");
			});
	};

	useEffect(() => {
		axios.get("/api/todos").then((res) => {
			let idx = 0;
			let items = [];
			while (idx in res.data) {
				items.push(res.data[idx]);
				idx++;
			}
			items.sort((a, b) => {
				if (a.id < b.id) return -1;
				if (a.id > b.id) return 1;
				return 0;
			});
			setTodos([...items]);
		});
	}, []);

	return (
		<div>
			<h1 className="text-primary text-center">Week 5 Todo App</h1>
			<div className="container">
				{todos.map((todo, idx) => {
					return (
						<Todo
							todo={todo}
							idx={idx}
							removeTodo={removeTodo}
							updateTodo={updateTodo}
							key={idx}
						/>
					);
				})}
				<CreateTodo addTodo={addTodo} />
			</div>
		</div>
	);
}
