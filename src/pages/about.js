import React from "react";
import Eric from "../images/Eric.jpg";
import AboutLogo from "../images/Sky-Marketing-Logo-About-Page.jpg";

const About = () => {
return (
	<main>
		<div className="coloredDiv">
			<h1>About Us</h1>
			<p className="centered">Welcome to Sky Marketing - where innovation takes flight and digital dreams become reality.</p>
		</div>

			<h2 className="centered bolded">About Sky Marketing</h2>
			<div className="imgDiv"><img src={AboutLogo} alt="Sky Marketing" className="aboutImage" /></div>
			<p>We are a dynamic web design and online marketing company on a mission to elevate your brand's online presence and propel your business to new heights in the digital landscape.</p>
			<p>At Sky Marketing, we're not just creating websites or executing marketing strategies; we're crafting powerful digital solutions that drive results. With passionate experts and a commitment to excellence, we're here to make your digital aspirations become reality.</p>
			<p>Explore opportunities with us and let's reach for the digital sky together.</p>

		<div className="coloredDiv">
			<h2 className="centered bolded">Meet Our Founder</h2>
			<div className="imgDiv"><img src={Eric} alt="Eric Rothmuller" className="aboutImage" /></div>
			<p>Hi! My name is Eric Rothmuller and I have been professionally providing web design and online marketing services since 2010. I went to the Santa Rosa JC for Marketing and U.C. Berkeley for Full Stack Programming. I started Sky Marketing in 2012.</p>
			<p>As a web developer, I am an expert in HTML, CSS, JavaScript, PHP, WordPress, React, UI/UX Design, Responsive Web Design, Web Hosting, Web Management, Node.js, Express.js, SQL, MongoDB, and more.</p>
			<p>For online marketing, I am an expert in Search Engine Optimization (SEO), Content Writing, eCommerce Management, Graphic Design, Social Media Marketing, Digital Advertising, E-Mail Marketing, and more.</p>
			<p>My goal for Sky Marketing is to provide our clients with the absolute best service possible. I will never advise or try to sell our clients on things they don't need or want and I will always strive to provide exceptional work on every project.</p>
			</div>

		<h2>Get In Touch</h2>
		<p>Contact us today to get started by calling us at <a href="tel:1-707-843-2047">707-843-2047</a> or by emailing us at <a href="mailto:eric@skymarketingco.com">eric@skymarketingco.com</a></p>
	</main>
);
};

export default About;
