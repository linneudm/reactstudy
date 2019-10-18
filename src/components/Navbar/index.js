import React from "react";

import {BrowserRouter, Link } from 'react-router-dom';

import "./styles.scss";

const Navbar = () => (
	<div id="navbar-main">
		<div className="mt-32"></div>
		<Link id="main-link" className="text-center" to='/'>Main</Link>
		<ul>
			<li className="links">
				<Link to='/' className="text-center">A</Link>
			</li>
			<li className="links">
				<Link to='/' className="text-center">B</Link>
			</li>
		</ul>
	</div>
);

export default Navbar;