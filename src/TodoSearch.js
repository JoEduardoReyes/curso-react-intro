import "./styles/TodoSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TodoSearch() {
	const animate = () => {
		console.log("Todo Search");
	};
	return (
		<div id="TodoSearchWrapper">
			<input
				id="TodoSearch"
				placeholder="Buscar Todo"
				onChange={(event) => {
					console.log("Escribiste en el search");
					console.log(event);
					console.log(event.target);
					console.log(event.target.value);
				}}
			/>
			<div id="TodoSearchIcon" onClick={animate}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
		</div>
	);
}

export { TodoSearch };
