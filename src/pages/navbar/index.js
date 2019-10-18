import React, { Component } from "react";

import { Link } from 'react-router-dom';

import "./styles.scss";

export class Navbar extends Component {
	render() {
		return (
		<div id="navbar-main">
			<Link to='/'>A</Link>
		</div>
		);
	}
}