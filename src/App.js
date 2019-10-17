import React from 'react';
import Routes from './routes';
//import api from './services/api';

import './styles.css'; 

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './pages/main';

const App = () => (
    <div className="App">
      <Navbar/>
      <Header/>
      <Routes/>
    </div>
)


export default App;
