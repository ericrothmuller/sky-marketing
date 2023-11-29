import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #ffffff;
  height: 85px;
  display: flex;
  justify-content: center;
  z-index: 12;
  align-content: center;
  width: 100vw;
  border-bottom: #000000 solid 15px;
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 38px;
  &.active {
    color: #000000;
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-thickness: 0.2rem;
    text-decoration-color: #00C0F7;
  };
  &:hover {
    color: #000000;
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-thickness: 0.2rem;
    text-decoration-color: #00C0F7;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #82716e;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;