import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements.js";

const navBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search for a book
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/cart" activeStyle>
            Cart
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default navBar;
