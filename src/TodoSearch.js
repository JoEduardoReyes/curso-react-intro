import React from "react";
import "./CSS/TodoSearch.css";

function TodoSearch() {
	const [searchValue, setSearchValue] = React.useState("");
	console.log("Los usuarios buscan Todos de " + searchValue);

	return (
		<input
			placeholder="Buscar tarea"
			value={searchValue}
			className="searchInput"
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
		/>
	);
}

export { TodoSearch };
