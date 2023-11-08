import React from 'react';
import './App1.css';


import Frames from './Frames';
import HomePage from './HomePage';


const Home = () => {
  


  return (
    
    <div>
    
      <br />
      <br />
      {/* <h1><b><u><marquee>Welcome to Our Website</marquee></u></b></h1> */}
        <HomePage />
        <Frames />
      
        
      </div>
   
  );
};

// const styles = {
//   centerContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     color:"blue",
//   },
//   centerButton: {
//     margin: '10px', 
//   },
// };

export default Home;
