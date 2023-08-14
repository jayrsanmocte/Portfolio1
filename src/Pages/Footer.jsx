import React from 'react';

const Footer = () => {
  return (
    <footer className='footer2 d-flex flex-column'> 
    <div className="line2 d-flex flex-column "></div>
      
      <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" >
        <i className="fab fa-facebook" alt="Facebook" ></i>
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className=" fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className=" fab fa-instagram" alt="Instagram" ></i>
        </a>
     
    </footer>
  );
};

export default Footer;