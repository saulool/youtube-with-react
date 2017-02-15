import React from 'react';
import VideoSuggestion from './VideoSuggestion';

const VideoSuggestionsList = (props) => {
	let suggestions = props.suggestions.map((suggestion, index) => {
		return <VideoSuggestion key={index} video={suggestion} />
	});

	return (
		<ul className="suggestions col-md-5">
			{suggestions}
		</ul>
	);
}

export default VideoSuggestionsList;