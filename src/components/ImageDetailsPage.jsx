import React, { Fragment } from 'react';

const ImageDetailsPage = ({ artworkSelected, handleClose }) => {
	console.log(artworkSelected.thumbnail.alt_text);
	return (
		<Fragment>
			<div className="parent">
				<h1 className="detail">{artworkSelected.title}</h1>
				<h3 className="detail">by {artworkSelected.artist_title}</h3>
				<button className="backButton" onClick={() => handleClose()}>
					Back
				</button>
			</div>
			<img
				alt={`${artworkSelected.thumbnail.alt_text}`}
				className="detail"
				src={`https://www.artic.edu/iiif/2/${artworkSelected.image_id}/full/843,/0/default.jpg`}
			/>
		</Fragment>
	);
};

export default ImageDetailsPage;
