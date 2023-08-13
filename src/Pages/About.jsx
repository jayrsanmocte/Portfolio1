import React, { useState, useEffect } from 'react';

const About = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Add or remove the animation class based on scroll position
        if (elementPosition - windowHeight <= 0) {
          setShouldAnimate(true);
        } else {
          setShouldAnimate(false);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container about ${shouldAnimate ? 'animate__animated animate__fadeInRight' : ''}`}>
        <div className="row">
        <div className="container row align-items-center">
        <h2 className="">About Me</h2>
        <div className="line"></div> {/* Horizontal line */}
      </div>
                           
                            
                            <div className="col">
                            <p>
                            My name is Jay-r San Mocte, an aspiring Frontend Developer with a strong
                            foundation in React.js, JavaScript, HTML, and CSS. I am seeking
                            opportunities to leverage my technical expertise and creative skills to
                            build immersive and user-friendly web applications.
                        </p>
                        
                        
                        
                        <h3>Languages & Frameworks</h3>
                        <p>
                            As an aspiring Frontend Developer, I have a strong foundation in
                            React.js, JavaScript, HTML, and CSS. I am dedicated to honing my skills
                            and contributing to the development of engaging web experiences.
                        </p>
                        <h3>Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React JS</li>
                            <li>Laravel</li>
                        </ul>
                        <h3>Database, Tools & Other Skills</h3>
                        <ul>
                            <li>Vercel</li>
                            <li>MySQL</li>
                            <li>phpMyAdmin</li>
                            <li>Git/Git Bash</li>
                            <li>Photoshop</li>
                        </ul>
                </div>
                 
                <div className="col ">
                        <img src="/Images/me.avif" className="imageabout" alt="" />
                    </div>
        </div>
      
    </div>
  );
};

export default About;
