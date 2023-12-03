import React from 'react';
import WordPressImage from "../images/WordPress-Logo.png";
import ReactLogo from "../images/React-Logo.png";

const Services = () => {
return (
	<main>
	<p>Website Design | Website Management | Smaller Projects | Graphic Design | SEO</p>
	<h1>Our Services</h1>
	<h2>Website Design</h2>
	<p>We create websites on either WordPress or React. We can create anything from small business websites to large eCommerce websites with either platform. Which one we create your website on is completely up to you.</p>
	<p><img src={WordPressImage} alt="WordPress Logo" /></p>
	<p>WordPress is a platform that over 40% of all websites are built on. It is the most popular content management system in the world.</p>
	<p>WordPress allows for a website to be made relatively quick, has many templates to choose from, and can be fully customized. It's a good option for small to medium-sized businesses or personal websites. </p>
	<p>Typical Design Cost Range: $1,500 - $5,000.
	<br/><em className="subFont">*Prices vary depending on the size of the project.</em></p>

	<p><img src={ReactLogo} alt="React Logo" /></p>
	<p>React is used by over 1.8 million websites and is one of the most beloved web frameworks by developers.</p>
	<p>A React website does take a significant amount of more time to create and maintain than a WordPress website but the overall performance of a React website is superior. React websites typically load faster which is important for things like SEO and a users experience. React websites are more custom and extremely scalable, making it a good choice for anything from small to large websites. This website that you are on now is built with React.</p>
	<p>Typical Design Cost Range: $10,000 - $100,000.
	<br/><em className="subFont">*Prices vary depending on the size of the project.</em></p>

	<hr className="beyondMain"/>

	<h2>Website Management</h2>
	<p>Every website needs to be consistently reviewed and updated or it will break. Themes, plugins, and packages will eventually become outdated, unsupported, or vulnerable to attacks and will break. Even the code itself may become outdated and unsupported by browsers, leaving your website broken and unusable. Our Website Management is a solution to this problem.</p>
	<p>Our Website Management services not only includes a monthly review to keep your website updated, but it can also include content management. If you need images, videos, text, flyers, contact forms, etc. added to your website, we can do this for you as your 100% go-to website management team. We also can manage your back-end server and ensure it's running properly and kept updated.</p>
	<p>Every Website Management plan is customized to your specific needs.</p>
	<p>Typical Website Management Cost Range: $200 - $2,000 per month.
	<br/><em className="subFont">*Prices vary depending on what your management needs are.</em></p>

	<hr className="beyondMain"/>

	<h2>Smaller Projects</h2>
	<p>Do you have a smaller project that you need help with? Maybe you changed your prices and need pricing updated on your website. Maybe you need a landing page made for an advertising campaign. Maybe you need some content writing done. Whatever it is, we most likely can do it and we charge a simple hourly rate.</p>
	<p>Normal Rates for Smaller Project Work: $40 per hour.
	<br/><em className="subFont">*Prices may vary depending your specific needs.</em></p>

	<hr className="beyondMain"/>

	<h2>Graphic Design</h2>
	<p>We provide professional graphic design services at an hourly rate. We've done logos, event flyers, photo editing, and much more! Let us know what you need and we'll let you know if we can do it.</p>
	<p>Normal Rates for Graphic Design Work: $50 per hour.
	<br/><em className="subFont">*Prices may vary depending your specific needs.</em></p>

	<hr className="beyondMain"/>

	<h2>Search Engine Optimization</h2>
	<p>Just having a website isn't enough to be found on the internet. In order to be found when people search for your products or services, you'll need to rank near the top of search results on search engines like Google. Search Engine Optimization (or SEO) does exactly that.</p>
	<p>Our SEO services are designed to make sure your website is optimized and fully compliant with Google's web standards with the goal of getting your website to rank high in search results when potential customers search for the product or service you provide. In order to do this, we will also create and optimize business listings, create high quality backlinks, and other things aimed at making your business rank as high as we can on Google.</p>
	<p>Typical SEO Cost Range: $300 - $600 per month.
	<br/><em className="subFont">*Prices vary depending your SEO needs.</em></p>

	</main>
);
};

export default Services;
