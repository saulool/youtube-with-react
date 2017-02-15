import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: ''
		}
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.search(this.state.searchText);
	}

	onChange(value) {
		this.setState({searchText: value});
	}

	render() {
		return (
			<form className="form-inline search-form" onSubmit={this.onSubmit.bind(this)}>
				<input className="form-control input-lg search-field" placeholder="Search" onChange={event => this.onChange(event.target.value)} />
				<button type="submit" className="btn btn-lg btn-danger search-button">Search</button>
			</form>
		);
	}	
}

export default SearchBar;