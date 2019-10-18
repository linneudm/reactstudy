import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Navbar from './components/Navbar';

const Routes = () => (
		<Switch>
			<Route exact path='/' component={Main}/>
			<Route exact path='/' component={Navbar}/>
			<Route path='/products/:id' component={Product}/>
		</Switch>
);

export default Routes;