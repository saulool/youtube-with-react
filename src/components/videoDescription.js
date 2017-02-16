import React from 'react';

const VideoDescription = (props) => {
	return (
		<div className="description">
			<h1 className="title">{props.title}</h1>
			<p className="about">{props.description}</p>
		</div>
	);
}

export default VideoDescription;