import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userBool, setUserBool] = useState(false); // Initialize with false
  const auth = useAuth();
  const navigate = useNavigate();

  const handlesignup = (event) => {
    event.preventDefault();

    const userTaken = auth.userlist.some((x) => x.email === email);

    if (userTaken) {
      setUserBool(true);
    } else {
      auth.signup(email, password, firstName, lastName);
      navigate('/signupsuccess');
    }
  };

  return (
    <div>
      <center>
        <form className='signup-form' onSubmit={handlesignup}>
          <br />
          <label>First Name </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />
          <label>Last Name </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Password </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          {userBool ? <p>Email is already exists</p> : ''}
          <button className='signup' type='submit'>
            Signup
          </button>
        </form>
      </center>
    </div>
  );
};

export default Signup;
