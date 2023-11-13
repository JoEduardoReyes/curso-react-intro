import "./CSS/TodoItem.css";

function TodoItem({ text }) {
	return (
		<li className="todoItem">
			<span>V</span>
			<p>{text}</p>
			<span>X</span>
		</li>
	);
}

export { TodoItem };
