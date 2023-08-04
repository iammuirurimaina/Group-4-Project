import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navBarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#f1f1f1",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    display: "block",
    height: "100%",
    padding: "12px 20px",
    textDecoration: "none",
    color: "darkblue",
  };

  const activeLinkStyle = {
    background: "darkblue",
    color: "white",
  };

  return (
    <nav style={navBarStyle}>
      <NavLink to="/" style={linkStyle} activeStyle={activeLinkStyle} exact>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle} activeStyle={activeLinkStyle}>
        About
      </NavLink>
      <NavLink to="/login" style={linkStyle} activeStyle={activeLinkStyle}>
        Login
      </NavLink>
      <NavLink
        to="/liked-articles"
        style={linkStyle}
        activeStyle={activeLinkStyle}
      >
        Liked Articles
      </NavLink>
    </nav>
  );
}

export default NavBar;