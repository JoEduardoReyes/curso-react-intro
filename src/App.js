import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./CSS/App.css";

const defaultTodos = [
	{ text: "Cortar Cebolla", completed: false },
	{ text: "Pasear al perro", completed: true },
	{ text: "aprender React", completed: false },
	{ text: "aprender PHP", completed: true },
	{ text: "aprender Laravel", completed: true },
];

function App() {
	return (
		<div className="App">
			<TodoCounter completed={16} total={25} />
			<TodoSearch />

			<TodoList>
				{defaultTodos.map((todo) => (
					<TodoItem text={todo.text} completed={todo.completed} />
				))}
			</TodoList>

			<CreateTodoButton />
		</div>
	);
}

export default App;
