import "./CSS/CreateTodoButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateTodoButton() {
	return (
		<button className="createTodoButton">
			Crear nuevo Todo
			<FontAwesomeIcon icon={faPlus} />
		</button>
	);
}

export { CreateTodoButton };
