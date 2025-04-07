import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home">
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