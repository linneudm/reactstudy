import React from 'react';
import Routes from './routes';
//import api from './services/api';

import './styles.css'; 

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './pages/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
    <div className="App">
	    <BrowserRouter>
	      <Navbar/>
	      <Header/>
	      <Routes/>
	    </BrowserRouter>
    </div>
)


export default App;
