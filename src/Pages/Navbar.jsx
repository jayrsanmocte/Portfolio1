import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  return (
    
    <div data-aos="fade-down">
<nav className="navbar navbar-expand-lg ">

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
    
      <a className="navbar-brand mt-2 mt-lg-0 " href="#">
        <img
          src="/Images/logo4.gif"
          height="15"
          alt="MDB Logo"
          loading="lazy" 
          className='logo4'
        />
      </a>
 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link 
              className="nav-link"
              to="about-section"
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
        </li>
        <li className="nav-item">
        <Link
              className="nav-link"
              to="project"
              smooth={true}
              duration={100}
            >
              Project
            </Link>
        </li>
      
      </ul>

    </div>
   
    
    
    
 </div>
</nav>
</div>
  )
}

export default Navbar