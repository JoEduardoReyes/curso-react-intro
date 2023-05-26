import "./styles/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
	return (
		<li className={`${props.completed ? "completed" : "not-completed"}`}>
			<span>
				<FontAwesomeIcon icon={faCircleCheck} />
			</span>
			<p>{props.text}</p>
			<span>
				<FontAwesomeIcon icon={faXmark} />
			</span>
		</li>
	);
}

export { TodoItem };
