import React, {Component} from 'react';

class VideoSuggestion extends Component {
	constructor(props) {
		super(props);

	}

	loadVideo() {
		this.props.loadVideo(this.props.video.id.videoId);
	}

	render() {
		return (
			<li className="suggestion" onClick={event => this.loadVideo(this.props.video.id.videoId)}>
				<img className="video-thumbnail" src={this.props.video.snippet.thumbnails.default.url} />
				<span className="video-title">{this.props.video.snippet.title}</span>
			</li>	
		);
	}
}

export default VideoSuggestion;