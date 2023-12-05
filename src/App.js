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
	{ text: "aprender Laravel", completed: false },
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState("");

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	console.log("Los usuarios buscan Todos de " + searchValue);

	return (
		<div className="App">
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
