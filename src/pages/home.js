import React from 'react';
import '.././App.css';

const Home = () => {
return (
	<main>
	<h1>Welcome to Sky Marketing</h1>
	<p className="centered">We look forward to bringing your vision to life.</p>
	<hr className="beyondMain"/>
	<h2>Elevate Your Online Presence and Fuel Your Business Growth</h2>
	<p>At Sky Marketing, we are your trusted partner in the digital world, dedicated to helping businesses thrive in the online realm. Our comprehensive suite of services, including web design, web management, search engine optimization, and more, is meticulously crafted to empower your brand and drive sustainable success. With a team of experts passionate about delivering results, we're here to transform your online presence into a powerful asset that attracts, engages, and converts. Explore our services, and let's embark on a journey to unlock your business's full potential in the digital age.</p>

	<h2>Our Services</h2>
	<h3>Web Design That Captivates</h3>
	<p>Your website is your digital storefront, and first impressions matter. Our creative web design team crafts visually stunning, user-friendly websites that leave a lasting impact. Whether you're starting from scratch or seeking a redesign, we'll ensure your website not only looks exceptional but also delivers a seamless user experience.</p>

	<h3>Unleash Your Potential with SEO</h3>
	<p>Ranking high in search engine results is crucial for online visibility. Our search engine optimization (SEO) experts employ proven strategies to boost your website's rankings, increase organic traffic, and drive qualified leads. Watch your business rise above the competition with our tailored SEO solutions.</p>

	<h3>Web Management Made Easy</h3>
	<p>Managing a website can be complex, but it doesn't have to be. Our web management services ensure your site stays secure, up-to-date, and optimized for peak performance. We handle the technicalities, allowing you to focus on what you do best: running your business.</p>

	<h3>More Than Just Services</h3>
	<p>We go beyond traditional marketing services. We provide data-driven insights, a personalized approach, and continuous support to help you navigate the ever-changing digital landscape. Our goal is not just to meet your expectations but to exceed them.</p>

	<h3>Your Success, Our Mission</h3>
	<p>At Sky Marketing, your success is our mission. We take pride in our commitment to delivering tangible results that impact your bottom line. With a dedicated team of digital experts, cutting-edge technology, and a client-centric approach, we're here to drive your business forward in the digital age. Whether you're a small startup or an established enterprise, let's partner together to create a digital strategy tailored to your unique needs and goals.</p>

	<h3>Get Started Today</h3>
	<p>Ready to take your online presence to the next level? Contact us to schedule a consultation and discover how Sky Marketing can help your business thrive in the digital era. We're excited to be your partner on this journey to success.</p>

	<p>Elevate. Engage. Excel. With Sky Marketing.</p>

	<div className="centered">
		<a href="/services"><button className="normalButton">Our Services</button></a>
	</div>

	<hr className="beyondMain"/>

	<h2>Get In Touch</h2>
	<p>Contact us today to get started by calling us at <a href="tel:1-707-843-2047">707-843-2047</a> or by emailing us at <a href="mailto:eric@skymarketingco.com">eric@skymarketingco.com</a></p>

	</main>
);
};

export default Home;
