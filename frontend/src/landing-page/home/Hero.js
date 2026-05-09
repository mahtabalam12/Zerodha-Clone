/*
import React from 'react'
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>

        <h1 className='mt-5'>Invest in everything </h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now </button>
     </div>
     </div>
    );
}

export default Hero ;
*/

import React from "react";

function Hero() {
  return (
    <div className="container-fluid px-3 py-5 mb-5">
      <div className="row text-center justify-content-center">
        
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-5"
            style={{ maxWidth: "900px", width: "100%" }}
          />
        </div>

        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="fw-bold display-5 mt-3">
            Invest in everything
          </h1>

          <p className="lead mt-3">
            Online platform to invest in stocks, derivatives,
            mutual funds, ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary btn-lg mt-4 px-5 py-2"
            style={{ borderRadius: "10px" }}
          >
            Signup Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;