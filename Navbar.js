import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

const Navbar = () => {
  const auth = useAuth();

  return (
    <div>
      <nav className="nav1" style={styles.nav}>
        <div style={styles.logoContainer}>
          <img
            src="https://i.pinimg.com/originals/0c/02/ce/0c02ce4850d6b88d44f87271ff5f4a71.png"
            alt="Logo"
            style={styles.logo}
          />
         <big><span style={styles.logoText}>Home Crew</span></big> 
        </div>
        <div style={styles.navLinks}>
         <b> <NavLink to="/">Home</NavLink></b>
          <b><NavLink to="/about">About</NavLink></b>
         <b><NavLink to="/service">Service</NavLink></b> 
        
        <b> <NavLink to="/profile">Profile</NavLink></b> 
        <b> {!auth.user && <NavLink to="/login">Login</NavLink>}</b> 
          <NavLink to='/Admin'><b>User</b></NavLink>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: "100px", 
    height: "100px",
    marginRight: "20px",
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
};

export default Navbar;