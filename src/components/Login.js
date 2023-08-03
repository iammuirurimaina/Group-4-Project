import React from 'react'
import { useState } from "react"

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


export default Login