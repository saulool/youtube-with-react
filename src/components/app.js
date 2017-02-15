import React, {Component} from 'react';
import SearchBar from './searchBar';
import Player from './player';
import VideoSuggestionsList from './VideoSuggestionsList';
import VideoDescription from './videoDescription';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoID: 'Bx4sLyn6xHA',
			videoDescription: 'test',
			videos: []
		}
	}

	async search(searchText) {
		try {
			let responseSearch = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchText+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			let responseDescription = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+responseSearch.data.items[0].id.videoId+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			this.setState({ videos: responseSearch.data.items, videoID: responseSearch.data.items[0].id.videoId, videoDescription: responseDescription.data.items[0].snippet.description});
		} catch(error) {
			console.log(error);
		}
	}

	render() {
		return (
			<div className="container app">
				<SearchBar search={this.search.bind(this)} />
				<Player video={this.state.videoID} />
				<VideoSuggestionsList suggestions={this.state.videos} />
				<VideoDescription description={this.state.videoDescription} />
			</div>
		);
	}
}

export default App;