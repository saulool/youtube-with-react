import React from 'react';
import Search from './search';

const Header = (props) => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo col-md-3"><span>POBRE</span><span className="red">TUBE</span></div>
			    <Search search={props.search} />
			</div>
		</div>
	);
}

export default Header;