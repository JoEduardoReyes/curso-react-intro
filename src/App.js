// import logo from "./platzi.webp";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const defaultTodos = [
	{ text: "Cortar Cebolla", completed: true },
	{ text: "Pasear al perro", completed: true },
	{ text: "aprender React", completed: true },
	{ text: "aprender PHP", completed: true },
	{ text: "aprender Laravel", completed: true },
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter completed={16} total={25} />
			<TodoSearch />

			<TodoList>
				{defaultTodos.map((todo) => (
					<TodoItem text={todo.text} completed={todo.completed} />
				))}
			</TodoList>

			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
