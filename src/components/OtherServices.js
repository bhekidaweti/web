import React from 'react';

const OtherServices = () => {
    return (
        <div className="container py-5">
            <h2 className="fw-bold text-dark">
                Other <span className="text-warning">Services</span>
            </h2>
            
            <div className="row mt-4">
                <div className="col-md-6">
                    <ul className="list-unstyled">
                        <li># Tombstone frames - R1 200</li>
                        <li># Tiling the top part only - R800</li>
                        <li># Tiling the top part and the stoep only - R1 300</li>
                        <li># Tiling the foundation right-round - R1 500</li>
                        <li># White chips - R650</li>
                        <li># Removal only - R500</li>
                        <li># Removal & Re-installation - R800 (with foundation R1 000)</li>
                        <li># Grave fillers - R1 200</li>
                        <li># Flattening & repairing tombstone - R2 000</li>
                        <li># Reblasting/Writing the tombstone:</li>
                        <ul>
                            <li>1. Headstone - R700</li>
                            <li>2. Whole Tombstone with normal colour - R1 200</li>
                        </ul>
                        <li># Grave Relocating only - R150</li>
                        <li># Headstone repair (not damaged) - R400</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-4 p-4 bg-dark text-white rounded position-relative">
                <p className="fs-5 mb-0">Monthly Grave Cleaning - R100</p>
                <p className="small">(First time cleaning is charged at a normal price)</p>
                <p className="small">Additional charge: Transport fee is charged to travel to cemeteries outside our area.</p>
            </div>
        </div>
    );
};

export default OtherServices;