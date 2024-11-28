import "./Header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/AO-Logo.png";

function Header() {
  return (
    <header>
      <div className="header">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/upload">Image Decoration</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
