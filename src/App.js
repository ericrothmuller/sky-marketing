import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;
