import React from 'react';
import logo from "../images/Sky-Marketing-Logo.svg";

function Footer() {
  return (
    <footer>
      <div>
        {/* Centered logo */}
        <img src={logo} className="footerLogo" alt="Sky Marketing Logo" />
      </div>
      <div className="footer-columns">
        {/* Three columns */}
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
