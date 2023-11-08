import React, { useState } from 'react';


function Admin1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    // Replace this with your actual login logic
    // Example: Check if the username and password match your authentication criteria
    if (username === 'admin' && password === 'password') {
      
      window.location.href = '/admin'; // Use the URL path defined in your App.js
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <title>Admin Login</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\nbody {\nbackground-image:url("backgroundimage2.jpeg"); no-repeat center center fixed;\n-webkit-background-size: cover;\n-moz-background-size: cover;\n-o-background-size: cover;\nbackground-size: cover;\n}\n',
        }}
      />
      <center>
        <h1>Admin Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            /><br /><br />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            /><br /><br />
          </div>
          <button type="button" onClick={login}>Login</button>
        </form>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
      </center>
    </div>
  );
}

export default Admin1;
