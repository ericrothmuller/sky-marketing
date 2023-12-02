import React from "react";
import eric from "../images/Eric.jpg";

const About = () => {
return (
	<main className="pageHeadingDiv">
		<h1 className="pageTitle">About Us</h1>
		<p className="pageParagraph">We are a web design and online marketing company out of Northern California.</p>
		<h2 className="pageTitle">Meet Our Founder</h2>
		<img src={eric} alt="Eric Rothmuller" />
		<p className="pageParagraph">Hello. My name is Eric Rothmuller and I have been doing web design and online marketing since 2010. I went to the Santa Rosa JC for Marketing and U.C. Berkeley for Full-Stack Programming.</p>
		<p>My web design and coding expertise is in HTML, CSS, JavaScript, React, WordPress, UI/UX Design, Responsive Web Design, Web Hosting, Node.js, Express.js, SQL, MongoDB, and more.</p>
		<p>My marketing expertise is primarily in online marketing techniques such as Search Engine Optimization, Social Media Marketing, Digital Ads, eCommerce Management, Graphic Design, E-Mail Marketing, and more.</p>
	</main>
);
};

export default About;
