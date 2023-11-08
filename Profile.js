import React from 'react';
import { useAuth } from './auth';

const Profile = () => {
  const auth = useAuth();

  const handlelogout = () => {
    auth.logout();
  };

  const logoutButtonStyle = {
    width: '100px', 
    height: '30px', 
    fontSize: '16px',
   
  };

  return (
    <div>
      Welcome to our Website
      <button onClick={handlelogout} style={logoutButtonStyle}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
