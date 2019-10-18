import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Client from './pages/client';
import Navbar from './components/Navbar';

const Routes = () => (
		<Switch>
			<Route exact path='/' component={Main}/>
			<Route exact path='/' component={Navbar}/>
			<Route path='/clientes/:id' component={Client}/>
		</Switch>
);

export default Routes;