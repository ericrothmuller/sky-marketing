import React from 'react';
import './App.css';
import BackToTopButton from './components/BackToTopButton';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import logo from './images/Sky-Marketing-Logo.png';

function App() {
return (
	<Router>
		<div className="logoDiv"><img src={logo} className="mainLogo" alt="Sky Marketing Logo" /></div>
	<Navbar />
	<BackToTopButton />
	<Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/portfolio' element={<Portfolio/>} />
	</Routes>
	</Router>
);
}

export default App;
