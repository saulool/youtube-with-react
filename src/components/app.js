import React, {Component} from 'react';
import Player from './player';
import VideoSuggestionsList from './VideoSuggestionsList';
import VideoDescription from './videoDescription';
import NotFound from './notFound';
import Footer from './footer';
import Header from './header';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoID: 'MgZoNI0VmdA',
			videoTitle: '',
			videoDescription: '',
			videos: [],
			error: false
		}
	}

	async search(searchText) {
		try {
			let responseSearch = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchText+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw&maxResults=10");
			let responseDescription = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+responseSearch.data.items[0].id.videoId+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			this.setState({ videos: responseSearch.data.items, videoID: responseSearch.data.items[0].id.videoId, videoDescription: responseDescription.data.items[0].snippet.description, videoTitle: responseDescription.data.items[0].snippet.title, error: false});
		} catch(error) {
			this.setState({ error: true });
		}
	}

	async loadVideo(videoID) {
		try {
			let responseDescription = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+videoID+"&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw");
			let responseSearch = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId="+videoID+"&type=video&key=AIzaSyB-gXE21gQCGUHHvQL5G9ZoTy_CUfsffMw&maxResults=10");

			this.setState({videoID: videoID, videos: responseSearch.data.items, videoDescription: responseDescription.data.items[0].snippet.description, videoTitle: responseDescription.data.items[0].snippet.title, error: false});
		} catch(error) {
			this.setState({ error: true });
		}	
	}

	async componentDidMount() {
		await this.loadVideo(this.state.videoID);
	}

	render() {
		if(this.state.error){
			return (
				<div className="app">
					<Header search={this.search.bind(this)} />
					<NotFound />
					<Footer />
				</div>
			);
		}else{
			return (
				<div className="app">
					<Header search={this.search.bind(this)} />
					<div className="container app-container">
						<div className="col-md-7">
							<Player video={this.state.videoID} />
							<VideoDescription title={this.state.videoTitle} description={this.state.videoDescription} />
						</div>
						<div className="col-md-5">
							<VideoSuggestionsList suggestions={this.state.videos} loadVideo={this.loadVideo.bind(this)} />
						</div>
					</div>
					<Footer />
				</div>
			);
		}
	}
}

export default App;