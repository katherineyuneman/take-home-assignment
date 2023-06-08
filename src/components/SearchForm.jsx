import './SearchForm.css';

import { useState } from 'react';

export function SearchForm({ onSearchSubmit }) {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		onSearchSubmit(query);
	}

	return (
		<>
			<form className="Form" role="search" onSubmit={handleFormSubmit}>
				<input
					aria-label="Search for artworks"
					className="input"
					id="search-field"
					inputMode="search"
					name="query"
					type="text"
					value={query}
					onChange={handleInputChange}
				/>
				<button className="searchButton" type="submit">
					Search
				</button>
			</form>
		</>
	);
}
