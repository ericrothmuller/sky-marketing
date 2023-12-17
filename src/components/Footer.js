import React from 'react';
import Logo from "../images/Sky-Marketing-Logo-Footer.jpg";

function Footer() {
  return (
    <footer>
      <div className="footerLogoDiv">
        <img src={Logo} className="footerLogo" alt="Sky Marketing Logo" />
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Column 1</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Column 2</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Column 3</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
