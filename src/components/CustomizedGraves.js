import React from 'react';

const CustomizedGraves = () => {
    const images = [
        "/images/Gallery1.jpeg",
        "/images/Gallery2.jpeg",
        "/images/Gallery3.jpeg",
        "/images/Gallery4.jpeg",
        "/images/Gallery5.jpeg",
        "/images/Gallery6.jpeg"

    ];

    return (
        <div className="container py-5">
            <h2 className="fw-bold text-dark">
                Gallery of <span className="text-warning">Customized Graves</span>
            </h2>
            <div className="row mt-4">
                {images.map((image, index) => (
                    <div key={index} className="col-md-3">
                        <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomizedGraves;