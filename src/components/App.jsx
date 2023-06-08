import { useState } from 'react';
import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ImageDetailsPage from './ImageDetailsPage';
import './App.css';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [showArtwork, setShowArtwork] = useState(false);
	const [artworkSelected, setArtworkSelected] = useState({});

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setSearchResults(json.data);
		});
	}

	const handleOpen = (result) => {
		console.log(result);
		setShowArtwork(true);
		setArtworkSelected(result);
	};

	const handleClose = () => {
		setShowArtwork(false);
	};

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{showArtwork ? (
				<ImageDetailsPage
					artworkSelected={artworkSelected}
					handleClose={handleClose}
				/>
			) : (
				<>
					<SearchForm
						handleOpen={handleOpen}
						searchResults={searchResults}
						onSearchSubmit={onSearchSubmit}
					/>
					{searchResults.map((result) => {
						return (
							<ul>
								<button
									key={result.image_id}
									className="list"
									onClick={() => handleOpen(result)}
								>
									<li>
										{result.title} by {result.artist_title}
									</li>
								</button>
							</ul>
						);
					})}
				</>
			)}

			<Footer />
		</div>
	);
}
