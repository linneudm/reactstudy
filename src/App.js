import React from 'react';
import Routes from './routes';
//import api from './services/api';

import './styles.scss'; 
import './extends.scss'; 

import Navbar from './components/Navbar';
import Main from './pages/main';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <div className="App">
	    <BrowserRouter>
	      <Navbar/>
	      <Routes/>
	    </BrowserRouter>
    </div>
)


export default App;
