import "./CSS/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ text }) {
	return (
		<li className="todoItem">
			<FontAwesomeIcon icon={faCircleCheck} />
			<p>{text}</p>
			<FontAwesomeIcon icon={faXmark} />
		</li>
	);
}

export { TodoItem };
