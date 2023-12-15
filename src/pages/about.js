import React from "react";
import eric from "../images/Eric.jpg";
import logo from "../images/Sky-Marketing-Logo.svg";

const About = () => {
return (
	<main className="pageHeadingDiv">
		<h1>About Us</h1>
		<p>We are a web design and online marketing company out of Northern California.</p>
		<div className="skyMarketingBox">
			<h2 className="alignSelfCenter">About Sky Marketing</h2>
			<img src={logo} alt="Sky Marketing" className="aboutImage" />
			<p>Hello. My name is Eric Rothmuller and I have been doing web design and online marketing since 2010. I went to the Santa Rosa JC for Marketing and U.C. Berkeley for Full-Stack Programming.</p>
			<p>My web design and coding expertise is in HTML, CSS, JavaScript, React, WordPress, UI/UX Design, Responsive Web Design, Web Hosting, Node.js, Express.js, SQL, MongoDB, and more.</p>
			<p>My marketing expertise is primarily in online marketing techniques such as Search Engine Optimization, Social Media Marketing, Digital Ads, eCommerce Management, Graphic Design, E-Mail Marketing, and more.</p>
		</div>
		<div className="founderBox">
			<h2 className="alignSelfCenter">Meet Our Founder</h2>
			<img src={eric} alt="Eric Rothmuller" className="aboutImage" />
			<p>Hello. My name is Eric Rothmuller and I have been doing web design and online marketing since 2010. I went to the Santa Rosa JC for Marketing and U.C. Berkeley for Full-Stack Programming.</p>
			<p>My web design and coding expertise is in HTML, CSS, JavaScript, React, WordPress, UI/UX Design, Responsive Web Design, Web Hosting, Node.js, Express.js, SQL, MongoDB, and more.</p>
			<p>My marketing expertise is primarily in online marketing techniques such as Search Engine Optimization, Social Media Marketing, Digital Ads, eCommerce Management, Graphic Design, E-Mail Marketing, and more.</p>
		</div>
	</main>
);
};

export default About;
