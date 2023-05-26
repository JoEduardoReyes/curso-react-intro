import "./styles/TodoCounter.css";

function TodoCounter({ total, completed }) {
	return (
		<h1>
			<span>{completed}</span> tareas completadas de <span>{total}</span>
		</h1>
	);
}

export { TodoCounter };
