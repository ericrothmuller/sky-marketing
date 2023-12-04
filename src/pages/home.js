import React from 'react';
import '.././App.css';

const Home = () => {
return (
	<main className="centeredDiv">
	<h1>Welcome to Sky Marketing</h1>
	<p>We are a web design and online marketing company out of Northern California.</p>
	<p>From the initial design of a brand new website to managing the end-product and everything in between.</p>
	<a href="/services"><button>Our Services</button></a>
	<p><a href="/contact/">Contact us</a> today at <a href="tel:707-843-2047">707-843-2047</a></p>
	</main>
);
};

export default Home;
