import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <div className="menu">
        <ul>
          <li><button className='btn btn-warning'><Link to="/">Home</Link></button></li>
          <li><button className='btn btn-warning'><Link to="/services">Our Services</Link></button></li>
          <li><button className='btn btn-warning'><Link to="/about">About Us</Link></button></li>
          <li><button className='btn btn-warning'><Link to="/contact">Contact Us</Link></button></li>
          <li><button className='btn btn-success'> <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download Catalogue</a></button></li>
        </ul>
      </div>
      
    );
}
