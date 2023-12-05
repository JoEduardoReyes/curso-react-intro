import React from "react";
import "./CSS/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
