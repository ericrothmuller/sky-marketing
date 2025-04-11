import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import { Link } from "react-router-dom";
import '../.././App.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/services">
            Services
          </NavLink>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;