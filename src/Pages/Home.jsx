import React from 'react';
import About from './About';

const Home = () => {
  const handleContactButtonClick = () => {
    window.open(
      'mailto:jayrsanmocte08@gmail.com?subject=Let%27s%20Talk&body=Hello%20Jay-r,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20...',
      '_blank'
    );
  };
  
  return (
    <>
      <div className="content">
        <div className="container animate__animated animate__fadeInUp animate__delay-1s ">
          <div className="row">
            <div className="col-md-6">
              <h1 className="hero-text">Front-End React</h1>
              <h1 className="hero-text1">
                Developer{' '}
                <img
                  className="hands animate__animated animate__tada animate__infinite"
                  src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png"
                  alt="waving_hand"
                />
              </h1>
              <p className="description">Hi my name is, </p>{' '}
              <p className='hero-text3'> Jay-r San Mocte</p>
              <p className="description2">
                A passionate Front End React Developer Based in Philippines
              </p>
              <button className="contact-button" onClick={handleContactButtonClick}>
                Let's Talk
              </button>
            </div>
            <div className="col-md-6">
              <div className="hero-img"></div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
