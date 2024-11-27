import "./Header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/AO-Logo.png";

function Header() {;

  return (
    <header>
      <div className="header">
          <div>
            <NavLink to="/upload">Image Decoration</NavLink>
          </div>
      </div>
    </header>
  );
}

export default Header;
