import React from "react"
import { NavLink } from "react-router-dom"

function NavBar () {
    const LinkStyle = {
        display: "block",
  width: "60px",
  height: "45px",
  padding: "8px",
  margin: "100px;",
  float: "left",
  border: "1 px solid",
  background:  "#dddddd",
  textDecoration: "none",
  color: "darkblue"
    };

    return (
    <div>
        <NavLink
         to="/"
         style={LinkStyle}
         activeStyle={{
            background: 'darkblue'
         }}
        >
        Home
        </NavLink>
        <NavLink 
        to="/about"
        style={LinkStyle}
        activeStyle={{
            background: "darkblue"
        }}
        >
        About
        </NavLink>
        <NavLink 
        to="/Login"
        style={LinkStyle}
        activeStyle={{
            background:"darkblue"
        }}
        >
            Login
        </NavLink>
    </div>)
}

export default NavBar

