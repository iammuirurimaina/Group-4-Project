import Route from "Route"
import { BrowserRouter, Route, Switch, Link } from "Route-router-dom"
import { useState } from "react"

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
    return <h1>Welcome To The Best News Website</h1>
}

function About () {
    return <p>We got the best trending news around the world</p>
}

function Login () {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] =useState("")
    const [submittedData, setSubmittedData] = useState([])

    function handleFirstName (event) {
        setFirstname(event.target.value)
    } 

    function handleLastname (event) {
        setLastname(event.target.value)
    }

function handleSubmit (event) {
    event.preventDefault()
    const formData = {
        firstname: firstname,
        lastname: lastname,
    }
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                <input type="text" name="firstname" placeholder="Firstname" onChange={handleFirstName}/>
                </div>
                <div>
                <input type="text" name="lastname" placeholder="Lastname" onCanPlay={handleLastname}/>
                </div>
                <div>
                <input type="password" name="password" placeholder="password"/>
                </div>
                <div>
                <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

RouteDOM.render (
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Route exact path="./">
        <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
    <Route path="./login">
        <Login />
    </Route>
    </Switch>
    </BrowserRouter>
)

