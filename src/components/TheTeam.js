import React from 'react';

const TheTeam = () => {
    return (
        <div className="container py-5 text-center">
            <h2 className="fw-bold text-dark">
                Meet <span className="text-warning">Our Team</span>
            </h2>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <p className="text-warning">
                        Our dedicated team at Digwamaje Grave Services is committed to providing exceptional service,
                        ensuring the dignified care of the faithfully departed. With professionalism and dedication,
                        we work to maintain, restore, and relocate graves, honoring the memory of loved ones.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <img src="/images/the-team.jpeg" alt="Our Team" className="img-fluid rounded" style={{height: "450px"}}/>
                </div>
                <div className="col-md-6">
                    <img src="/images/the-team-1.jpeg" alt="Our Team" className="img-fluid rounded" style={{height: "450px"}}/>
                </div>
                <div className="col-md-6">
                    <img src="/images/team-0.jpeg" alt="Our Team" className="img-fluid rounded" style={{height: "450px"}}/>
                </div>
            </div>
        </div>
    );
};

export default TheTeam;