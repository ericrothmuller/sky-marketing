import React from 'react';
import ContactUsImg from "..//images/Contact-Us-Bottom.png";

const Contact = () => {
return (
	<main>
		<div className="coloredDiv">
		<h1>Get In Touch</h1>
		<p className="centered">We look forward to speaking with you!</p>
		</div>
	<div className="row">
		<div className="columnLeft">
		<div class="centered">
				<p><strong>Hours of Operation:</strong></p>
				<p><strong>Monday:</strong> 8:00AM-6:00PM</p>
				<p><strong>Tuesday:</strong> 8:00AM-6:00PM</p>
				<p><strong>Wednesday:</strong> 8:00AM-6:00PM</p>
				<p><strong>Thursday:</strong> 8:00AM-6:00PM</p>
				<p><strong>Friday:</strong> 8:00AM-6:00PM</p>
				<p><strong>Saturday:</strong> Closed</p>
				<p><strong>Sunday:</strong> Closed</p>
			</div>
		</div>
		<div className="columnRight">
		<div class="centered">
			<	p><strong>Phone:</strong> <a href="tel:707-843-2047">707-843-2047</a></p>
				<p><strong>Email:</strong> <a href="mailto:info@skymarketingco.com">info@skymarketingco.com</a></p>
				<img src={ContactUsImg} alt="Contact Us Image" className="contactImage"/>
			</div>
		</div>
	</div>
	</main>
);
};

export default Contact;