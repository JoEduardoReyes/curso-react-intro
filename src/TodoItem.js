import "./styles/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoItem(props) {
	return (
		<li>
			<span>
				<FontAwesomeIcon icon="fa-regular fa-circle-check" />
			</span>
			<p>{props.text}</p>
			<span>
				<FontAwesomeIcon icon="fa-solid fa-xmark" />
			</span>
		</li>
	);
}

export { TodoItem };
