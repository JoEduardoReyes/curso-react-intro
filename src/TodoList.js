import "./styles/TodoList.css";

function TodoList({ children }) {
	return (
		<section id="TodoList">
			<ul>{children}</ul>
		</section>
	);
}

export { TodoList };
