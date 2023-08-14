import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);
  
  const gifUrl = `/Images/logo4.gif?timestamp=${Date.now()}`; // Append a timestamp query parameter

  return (
    
    <div className="layout">
      {loading ? (
       <div class="center-container">
       <div class="logo">
       
    <div className="container loader" style={{ paddingTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         <img src={gifUrl} class="logo1" alt=""/>
         </div>
       </div>
     </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
