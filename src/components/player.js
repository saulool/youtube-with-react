import React, {Component} from 'react';

const initiateYT = () => {
	var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {});
	}
}

class Player extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		initiateYT();
	}

	render() {
		return (
			<div>
				<iframe id="player" className="player" width="100%" height="360" src={`https://www.youtube.com/embed/${this.props.video}?enablejsapi=1`} frameBorder="0"></iframe>
			</div>
		);
	}
}

export default Player;