import "./styles/App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "animate.css";

const defaultTodos = [
	{ text: "Cortar Cebolla", completed: true },
	{ text: "Estudiar React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Estudiar PHP", completed: false },
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter completed={16} total={25} />
			<TodoSearch />

			<TodoList>
				{defaultTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>

			{<CreateTodoButton />}
		</React.Fragment>
	);
}

export default App;

/* icons */
