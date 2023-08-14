import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook" alt="Facebook" ></i>
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram" alt="Instagram" ></i>
        </a>
      <div className="footer-right">
        {/* Right footer content */}
      </div>
    </footer>
  );
};

export default Footer;