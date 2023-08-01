import React from "react"
import { Link } from "react-router-dom"

function NavBar () {
    return (
    <div>
        <Link to="/">
        Home
        </Link>
        <Link to="/about">
        About
        </Link>
        <Link to="/Login">
            Login
        </Link>
    </div>)
}

function Home () {
    return <h1>Welcom To The Best News Website</h1>
}

function About () {
    return <p>We got the best trending news around the world</p>
}

function Login () {
    return (
        <div>
            <form>
                <input type="text" name="FirstName" placeholder="FirstName"/>
                <input type="text" name="SurName" placeholder="Surname"/>
                <input type="password" name="password" placeholder="password"/>
            </form>
        </div>
    )
}

export default NavBar 