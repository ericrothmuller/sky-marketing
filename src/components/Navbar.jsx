import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import Logo from "../images/Sky-Marketing-Logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* <Link to="/" className="title">Sky Marketing</Link> */}
      <Link to="/" className="title"><div className="logoDiv"><img src={Logo} className="mainLogo" alt="Sky Marketing Logo" /></div></Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}


