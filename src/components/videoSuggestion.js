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
				<div className="video-info">
					<span className="video-title">{this.props.video.snippet.title}</span>
					<span className="video-author">{this.props.video.snippet.channelTitle}</span>
				</div>
			</li>
		);
	}
}

export default VideoSuggestion;