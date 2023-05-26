import "./styles/CreateTodoButton.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateTodoButton() {
	return (
		<section className="BottomMenu">
			<button id="CreateTodoButton">
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</section>
	);
}

export { CreateTodoButton };
