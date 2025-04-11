import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import { Link } from "react-router-dom";
import '../.././App.css';
import '.Navbar.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
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