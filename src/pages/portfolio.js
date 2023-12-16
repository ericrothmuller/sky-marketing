import React from 'react';
import AppliedSigns from "../images/Portfolio Images/Applied-Signs-Screenshot.jpg";
import ChaoSantana from "../images/Portfolio Images/Chao-Santana-Farm-Screenshot.jpg";
import DeWitteConstruction from "../images/Portfolio Images/DeWitte-Construction-Screenshot.jpg";
import EliteMD from "../images/Portfolio Images/Elite-MD-Screenshot.jpg";
import FlakeyCream from "../images/Portfolio Images/Flakey-Cream-Screenshot.jpg";
import FlyingGoatCoffee from "../images/Portfolio Images/Flying-Goat-Screenshot.jpg";
import FourSeasons from "../images/Portfolio Images/Four-Seasons-Vineyard-Management-Screenshot.jpg";
import ImageAthletic from "../images/Portfolio Images/Image-Athletic-Screenshot.jpg";
import MurderRidge from "../images/Portfolio Images/Murder-Ridge-Screenshot.jpg";
import SonomaCrust from "../images/Portfolio Images/Sonoma-Crust-Screenshot.jpg";


const Portfolio = () => {
return (
	<main>
	<h1>Portfolio</h1>

	<p className="centered"><a href="#WorkedFor">Whom We've Done Work For</a> | <a href="#BusinessWebsites">Business Websites</a></p>

	<hr className="beyondMain"/>

	<h2 id="WorkedFor">Some of the companies we've done work for:</h2>
	<div className="row">
		<div className="columnLeft">
			<ul>
				<li>Anytime Fitness</li>
				<li>Firefly Athletics</li>
				<li>Elite MD</li>
				<li>Image Athletic</li>
				<li>iHeart Media</li>
				<li>Ad Taxi</li>
				<li>Bruk Hair Studio</li>
				<li>Thrive & Lead</li>
				<li>Cait Hudson Realty</li>
				<li>Home Pro 360</li>
				<li>Chao-Santana Farm</li>
				<li>Belay Advertising</li>
				<li>Gladstone Clinic</li>
				<li>Swicegood Civil Engineering</li>
				<li>Pristine Window Solutions</li>
				<li>Green Storx LLC</li>
				<li>Funny Picturesque</li>
				<li>Tag-Dis Tag-Dat</li>
				<li>Bliss Inks</li>
				<li>Home Sellers Realty</li>
				<li>Her N Her</li>
				<li>Trashy Behavior</li>
				<li>First Class Limo Service</li>
				<li>Executive Charters</li>
			</ul>
		</div>
		<div className="columnRight">
			<ul>
				<li>Flying Goat Coffee</li>
				<li>Child Parent Institute</li>
				<li>Sonoma Crust</li>
				<li>Red Bird Bakery</li>
				<li>Kastania Vineyards</li>
				<li>Murder Ridge Winery</li>
				<li>Rancho Maria Winery</li>
				<li>Four Seasons Vineyard Management</li>
				<li>Sonoma Barrel</li>
				<li>BLS Auto Detail</li>
				<li>Flakey Cream Coffee and Donuts</li>
				<li>Golden Bear Financial</li>
				<li>Laser Tag of Santa Rosa</li>
				<li>Avenue Car Wash</li>
				<li>Redwood Coast Staffords</li>
				<li>Healdsburg Animal Shelter</li>
				<li>A & D Mobile Automotive Repair</li>
				<li>Redwood Empire Fire</li>
				<li>Global Teff</li>
				<li>Blue Heron IPM Pest Control</li>
				<li>North Bay Auto</li>
				<li>K9 Activity Club</li>
				<li>Applied Signs</li>
				<li>DeWitte Construction</li>	
			</ul>
		</div>
		<p> <em className="subFont">*This is not all of the companies we've done work for but this list of clients should give you an idea of the type of companies we've done work.
		<br />*Work done includes web design, SEO, web management, and more.</em></p>
	</div>

	<hr className="beyondMain"/>

	<h2 id="BusinessWebsites">Business Websites</h2>
	<div className="portfolioDiv">
		<img src={EliteMD} alt="elitemdspa.com Website Design" className="portfolioImage" />
		<img src={FlyingGoatCoffee} alt="flyinggoatcoffee.com Website Design" className="portfolioImage" />
		<img src={FourSeasons} alt="fourseasonsvineyardmanagement.com Website Design" className="portfolioImage" />
		<img src={MurderRidge} alt="murderridge.com Website Design" className="portfolioImage" />
		<img src={ImageAthletic} alt="imageathletic.com Website Design" className="portfolioImage" />
		<img src={AppliedSigns} alt="appliedsigns.net Website Design" className="portfolioImage" />
		<img src={SonomaCrust} alt="sonomacrust.com Website Design" className="portfolioImage" />
		<img src={FlakeyCream} alt="flakeycream.com Website Design" className="portfolioImage" />
		<img src={ChaoSantana} alt="chaosantanafarm.com Website Design" className="portfolioImage" />
		<img src={DeWitteConstruction} alt="dewitteco.com Website Design" className="portfolioImage" />
	</div>
	<p> <em className="subFont">*This is not all of the business websites we've done but this should give you a good sample of some of our work.
	<br />*Styles and design preferences are up to the client. Our job is to make your vision come alive.</em></p>
	</main>
);
};

export default Portfolio;
