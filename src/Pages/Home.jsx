import React from 'react'

const Home = () => {
  return (
    <div className="content">
            <div className="container ">
                <div className="row">
                  <div className="col">
                          <h1 className="hero-text">Front-End React</h1>    
                        <h1 className="hero-text1 ">Developer  <img className="hands animate__animated animate__tada animate__infinite 	"src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="waving_hand"></img> </h1> 
                        <p className="description">Hi i’m Jay-r San Mocte </p> <p className="description2"> A pasionate Front End React Developer Based in Philippines</p>
                        <button className="contact-button">Let's Talk</button>
                      
                  </div>
                  <div className="col">
                  <div className="hero-img"></div>
                  </div>
                  
                </div>
                <div className="row">
                <p>Tech Stack</p>
                <img src="https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg" alt="" className='skill' />
                <img src="https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg" alt=""className='skill' />
                <img src="https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg" alt="" className='skill' />
                </div>
              
          </div>
    </div>  
   
  )
}

export default Home