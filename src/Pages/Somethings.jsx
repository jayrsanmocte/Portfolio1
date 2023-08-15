import React from 'react';


const Somethings = () => {
  return (
    <div data-aos="fade-down">
    
    <div className="container mt-5">
      <span className='d-flex align-items-center'>
        <h2 className="colorgreen">Some Things I've Built</h2>
        <div className="line3"></div>
      </span>
      
      <div className="row">
        
        <div className="card " data-aos="zoom-in">
          <div className="scrollable-image">
            <div className="image-overlay"></div>
            <img className="card-img-top" src="/Images/doggy.png" alt="Title" />
          </div>
        </div>
        <div className="col md-12 sm-6">
          <ul>
            <div className="description" data-aos="zoom-in-left">Project</div>
            <li className='description2' data-aos="zoom-in-left">Special Dog Adoption Website</li>
          </ul>
         
         <div className="line2 md-12"> <h5 className='description3 text-center pt-3' data-aos="fade-left">On my website, using by <span style={{ color: '#64fedb' }}>React JS and Bootstrap,</span> you have two adoption paths. Adopt for free and pick a breed that fits your lifestyle, or choose a dog by paying a fee, supporting their well-being.</h5> </div>
           <div className="row">
            <div className="col ">
                
                <a href="https://github.com/jayrsanmocte/doggy1" target="_blank" rel="noopener noreferrer" >
                  <i className=" fab fa-github fa-3x " data-aos="flip-right"></i></a> &nbsp;  &nbsp; &nbsp; 
                  <a href="https://doggy-doggy-fjiwpb9h3-mcdha.vercel.app/" target="_blank" rel="noopener noreferrer">
              <i class="fab fas fa-up-right-from-square fa-3x" data-aos="flip-right"></i>
              </a>  
            </div>
          
             
              
              
           </div>
          
        </div>
        
      </div>
    </div>
    </div>   
     
  );
}

export default Somethings;
