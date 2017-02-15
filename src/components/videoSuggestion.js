import React from 'react';

const VideoSuggestion = (props) => {
	return (
		<li>
			<div>
				<img src={props.video.snippet.thumbnails.default.url} />
				<span>{props.video.snippet.title}</span>
			</div>
		</li>	
	);
}

export default VideoSuggestion;