import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lis, setLis] = useState(true);

  const change = (event) => {
    setEmail(event.target.value);
  };

  const change1 = (event) => {
    setPassword(event.target.value);
  };

  const handlelogin = (event) => {
    auth.userlist.map((x=> {
      if (x.email === email && x.password === password) {
        auth.login(email);
        navigate('/loginsuccess');
        setLis(true);
      } else {
        setLis(false);
      }
    }));
    event.preventDefault();
  };

  return (
    <div className='login-form'>
      <br></br>
      <center>
        <form onSubmit={handlelogin}>
          <label>Email </label>
          <input
            type='email'
            value={email}
            onChange={change}
            required
          />
          <br></br>
          <label>Password </label>
          <input
            type='password'
            value={password}
            onChange={change1}
            required
          />
          <br></br>
          <br></br>
          <button className='login' type='submit'>
            Login
          </button>
          {!lis ? <p>Invalid User and password</p> : ''}
          <h3>If you don't have an Account</h3>
          <a href='/signup'>Signup</a>
        </form>
      </center>
    </div>
  );
};

export default Login;
