import React from 'react';
import WordPressImage from "../images/WordPress-Logo.png";
import ReactLogo from "../images/React-Logo.png";

const Services = () => {
return (
	<main className="pageHeadingDiv">
	<h1 className="pageTitle">Our Services</h1>
	<h2>Web Design</h2>
	<p>We create websites on either WordPress or React. We can create anything from small business websites to large eCommerce websites with either platform. Which one we create your website on is completely up to you.
	<p><img src={WordPressImage} /></p>
	<p>WordPress is a platform that over 40% of all websites are built on. It is the most popular content management system in the world.</p>
	<p>WordPress allows for a website to be made relatively quick, has many templates to choose from, and can be fully customized. It's a good option for small to medium-sized businesses or personal websites. </p>
	<p>Typical Design Cost Range: $1,500 - $5,000
	<br/><em>*Prices vary depending on scope and scale of the project</em></p>

	<p><img src={ReactLogo} /></p>
	<p>React is used by over 1.8 million websites and is one of the most beloved web frameworks by developers.</p>
	<p>A React website does take a significant amount of more time to create and maintain than a WordPress website but the overall performance of a React website is superior. React websites typically load faster which is important for things like SEO and a users experience. React websites are more custom and extremely scalable, making it a good choice for anything from small to large websites. This website that you are on now is built with React.</p>
	<p>Typical Design Cost Range: $10,000 - $100,000
	<br/><em>*Prices vary depending on scope and scale of the project</em></p>

	<h2>Website Management</h2>
	</p></main>
);
};

export default Services;
