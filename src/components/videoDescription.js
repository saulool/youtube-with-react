import React from 'react';

const VideoDescription = (props) => {
	return (
		<div className="description">
			<h1 className="title">{props.title}</h1>
			<h2 className="author">{props.author}</h2>
			<p className="about">{props.description}</p>
		</div>
	);
}

export default VideoDescription;