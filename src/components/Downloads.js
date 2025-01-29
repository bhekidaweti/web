import React from 'react';

const Downloads = () => {
    return (
        <div className="container py-5 text-center">
            <h2 className="fw-bold text-dark">
                Download <span className="text-warning">Our Catalogues</span>
            </h2>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <p className="text">
                        Download our latest price list catalogues for Tombstones and Services below:
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <button className='download-buttons'> <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Tombstones Price List</a></button>
                </div>
                <div className="col-md-6">
                    <button className='download-buttons'> <a href="/DGS.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Services Price List</a></button>
                </div>
            </div>
        </div>
    );
};

export default Downloads;