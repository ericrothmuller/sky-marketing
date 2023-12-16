import React from "react";
import Eric from "../images/Eric.jpg";
import AboutLogo from "../images/Sky-Marketing-Logo-About-Page.jpg";

const About = () => {
return (
	<main className="pageHeadingDiv">
		<h1>About Us</h1>
		<p className="centered bolded">Welcome to Sky Marketing – where innovation takes flight and digital dreams become reality.</p>
		<div className="skyMarketingBox">
			<h2 className="alignSelfCenter">About Sky Marketing</h2>
			<img src={AboutLogo} alt="Sky Marketing" className="aboutImage" />
			<p>We are a dynamic web design and online marketing company on a mission to elevate your brand's online presence and propel your business to new heights in the digital landscape.</p>
			<p>At Sky Marketing, we're not just creating websites or executing marketing strategies; we're crafting powerful digital solutions that drive results. With passionate experts and a commitment to excellence, we're here to make your digital aspirations become reality.</p>
			<p>Explore opportunities with us and let's reach for the digital sky together.</p>
		</div>
		<div className="founderBox">
			<h2 className="alignSelfCenter">Meet Our Founder</h2>
			<img src={Eric} alt="Eric Rothmuller" className="aboutImage" />
			<p>Hello. My name is Eric Rothmuller and I have been doing web design and online marketing since 2010. I went to the Santa Rosa JC for Marketing and U.C. Berkeley for Full-Stack Programming.</p>
			<p>My web design and coding expertise is in HTML, CSS, JavaScript, React, WordPress, UI/UX Design, Responsive Web Design, Web Hosting, Node.js, Express.js, SQL, MongoDB, and more.</p>
			<p>My marketing expertise is primarily in online marketing techniques such as Search Engine Optimization, Social Media Marketing, Digital Ads, eCommerce Management, Graphic Design, E-Mail Marketing, and more.</p>
		</div>
	</main>
);
};

export default About;
