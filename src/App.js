import "./styles/App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
/* icons*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck as regCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
	faCircleCheck,
	faXmark,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

const defaultTodos = [
	{ text: "Cortar Cebolla", completed: false },
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

library.add(faCircleCheck, regCircleCheck, faXmark, faPlus);
