import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg  " data-aos="fade-down">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars  "></i>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <a className="  navbar-brand   " href="#">
            <img
              src="/Images/logo4.gif"
              height="20"
              alt="MDB Logo"
              loading="lazy"
              className='logo4 '
            />
          </a>
            <li className="nav-item mt-3">
              <Link
                className="nav-link"
                to="about-section"
                smooth={true}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item mt-3">
              <Link
                className="nav-link"
                to="project"
                smooth={true}
                duration={100}
              >
                Project
              </Link>
             
            </li>
            <li className="nav-item mt-3">
            < a href="" download className="download-button nav-link">
        Download my CV
      </a>
      </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
