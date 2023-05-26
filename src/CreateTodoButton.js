import "./styles/CreateTodoButton.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateTodoButton() {
	return (
		<section className="BottomMenu">
			<button
				id="CreateTodoButton"
				onClick={(event) => {
					console.log("Le giste click");
					console.log(event);
					console.log(event.target);
				}}
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</section>
	);
}

export { CreateTodoButton };
