import React, {Component} from 'react';
import SearchBar from './searchBar';
import Player from './player';
import VideoSuggestionsList from './VideoSuggestionsList';
import VideoDescription from './videoDescription';
import NotFound from './notFound';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoID: 'MgZoNI0VmdA',
			videoDescription: '',
			videos: [],
			error: false
		}
	}

	async search(searchText) {
		try {
			let responseSearch = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchText+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			let responseDescription = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+responseSearch.data.items[0].id.videoId+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			this.setState({ videos: responseSearch.data.items, videoID: responseSearch.data.items[0].id.videoId, videoDescription: responseDescription.data.items[0].snippet.description, error: false});
		} catch(error) {
			this.setState({ error: true });
		}
	}

	async componentDidMount() {
		try {
			let responseDescription = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+this.state.videoID+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			let responseSearch = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId="+this.state.videoID+"&type=video&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			
			this.setState({ videos: responseSearch.data.items, videoDescription: responseDescription.data.items[0].snippet.description, error: false});
		} catch(error) {
			this.setState({ error: true });
		}	
	}

	render() {
		if(this.state.error){
			return (
				<div className="container app">
					<SearchBar search={this.search.bind(this)} />
					<NotFound />
				</div>
			);
		}else{
			return (
				<div className="container app">
					<SearchBar search={this.search.bind(this)} />
					<div className="col-md-7">
						<Player video={this.state.videoID} />
						<VideoDescription description={this.state.videoDescription} />
					</div>
					<div className="col-md-5">
						<VideoSuggestionsList suggestions={this.state.videos} />
					</div>
				</div>
			);
		}
	}
}

export default App;