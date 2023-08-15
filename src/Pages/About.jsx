import React, { useState, useEffect } from 'react';

const About = () => {
 

  return (
    <div data-aos="fade-down">
    <div className="container about colorwhite">
     
        <div className="row">
        <div className="container row align-items-center ">
       <span className='d-flex align-items-center'><h2 className="colorgreen"> About Me </h2>
        <div className="line"></div></span>
      </div>
                           
                            
                            <div className="col">
                            <p>
                            My name is <span style={{ color: '#64fedb' }}>Jay-r San Mocte</span>, an aspiring Frontend Developer with a strong
                            foundation in Web Design, I am seeking
                            opportunities to leverage my technical expertise and creative skills to
                            build immersive and user-friendly web applications.
                          </p>
                        
                        
                        
                        <h3 className='colorgreen'>Languages & Frameworks</h3>
                        <p>
                            As an aspiring Frontend Developer, I have a strong foundation in <span style={{ color: '#64fedb' }}>
                            React.js, JavaScript, HTML, and CSS </span>. I am dedicated to honing my skills
                            and contributing to the development of engaging web experiences.
                        </p>
                        <h3 className='colorgreen'>Skills</h3>
                        <div data-aos="fade-left">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React JS</li>
                            <li>Laravel</li>
                        </ul>
                        </div>
                        <h3 className='colorgreen'>Database, Tools & Other Skills</h3>
                        <div data-aos="fade-left">
                        <ul>
                            <li>Vercel</li>
                            <li>MySQL</li>
                            <li>phpMyAdmin</li>
                            <li>Git/Git Bash</li>
                            <li>Photoshop</li>
                        </ul>
                        </div>
                </div>
                 
                <div className="col  animate__animated animate__fadeIn animate__infinite animate__slower">
                        <img src="/Images/me.avif" className="imageabout " alt="" />
                       
                    
                    </div>
        </div>
      
    </div>
    </div>
  
  
  
  
  
  );
};

export default About;
