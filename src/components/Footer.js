import React from 'react';
import Logo from "../images/Sky-Marketing-Logo-Footer.png";

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <p className="bolded">Phone: 707-843-2047</p>
          <p><a href="/privacy-policy/">Privacy Policy</a> | <a href="/terms-and-conditions/">Terms & Conditions</a> | <a href="/accessability">Accessibility</a></p>
        </div>
        <div className="footer-column">
        <a href="/home"><img src={Logo} className="footerLogo" alt="Sky Marketing Logo" /></a>
        </div>
        <div className="footer-column">
          <p className="bolded">Open: Monday - Friday: 8:00 AM - 5:00 PM PST</p>
          <p>© 2023 Sky Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
