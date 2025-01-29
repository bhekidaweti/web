import React from 'react';


const About = () => {
    return (
        <div className="container py-5 text-center">
          <h2 className="fw-bold text-dark">
            About <span className="text-warning">Digwamaje Grave Services</span>
          </h2>    
          
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <p className="text-warning">
                Digwamaje Grave Services was founded in the year 2023 by Amogelang
                Digwamaje. The idea of the company started while working at a local
                funeral parlour, and that was when the gap was discovered in the
                market.
               
                The company started by rendering grave cleaning services, then later
                expanded its services to building foundations, tombstone repair,
                tiling, headstones, and more.
              </p>
            </div>
          </div>
    
          <div className="mt-5 p-4 bg-dark text-white rounded position-relative">
            <span className="position-absolute top-0 start-0 translate-middle text-warning display-4">“</span>
            <p className="text-center fs-5 mb-0">
              Taking Care of The Faithfully Departed. May Love and Light Shine upon your family.
            </p>
          </div>
        </div>
      );
}
export default About;