import "./CSS/CreateTodoButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateTodoButton() {
	return (
		<button
			className="createTodoButton"
			onClick={(event) => {
				console.log("Le diste Click");
				console.log(event);
				console.log(event.target);
			}}
		>
			Crear nuevo Todo
			<FontAwesomeIcon icon={faPlus} />
		</button>
	);
}

export { CreateTodoButton };
