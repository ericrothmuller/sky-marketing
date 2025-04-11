import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">Sky Marketing</Link>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}


