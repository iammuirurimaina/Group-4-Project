import React, { useState } from 'react';

function Login() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  function handleFirstName(event) {
    setFirstname(event.target.value);
  }

  function handleLastname(event) {
    setLastname(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
  }

  return (
    <div className="ui grid centered" style={{marginTop:"150px"}}>
      <div className="ui six wide column">
        <form onSubmit={handleSubmit} className="ui form">
          <h1 className="ui header">Login</h1>
          <div className="field">
            <label>Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={handleFirstName}
              required
            />
          </div>
          <div className="field">
            <label>Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={handleLastname}
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
