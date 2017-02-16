import React from 'react';
import VideoSuggestion from './VideoSuggestion';

const VideoSuggestionsList = (props) => {
	let suggestions = props.suggestions.map((suggestion, index) => {
		return <VideoSuggestion key={index} video={suggestion} loadVideo={props.loadVideo} />
	});

	return (
		<ul className="suggestions">
			{suggestions}
		</ul>
	);
}

export default VideoSuggestionsList;