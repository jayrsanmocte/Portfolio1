import React from 'react';


const Somethings = () => {
  return (
    <div className="container mt-5">
      <span className='d-flex align-items-center'>
        <h2 className="colorgreen">Some Things I've Built</h2>
        <div className="line3"></div>
      </span>

      <div className="row">
        <div className="card">
          <div className="scrollable-image">
            <div className="image-overlay"></div>
            <img className="card-img-top" src="/Images/doggy.png" alt="Title" />
          </div>
        </div>
        <div className="col md-12 sm-6">
          <ul>
            <div className="description">Project</div>
            <li className='description2'>Special Dog Adoption Website</li>
          </ul>
          <div className="line2 md-12"> <h5 className='description3 text-center pt-3'>On my website, using by <span style={{ color: '#64fedb' }}>React JS and Bootstrap,</span> you have two adoption paths. Adopt for free and pick a breed that fits your lifestyle, or choose a dog by paying a fee, supporting their well-being.</h5> </div>
        </div>
      </div>
    </div>
  );
}

export default Somethings;
