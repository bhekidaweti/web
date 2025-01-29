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
          <li><button className='btn btn-warning'><Link to="/the-team">Our Team</Link></button></li>
          <li><button className='btn btn-warning'><Link to="/testimonials">Testimonials</Link></button></li>
          <li><button className='btn btn-warning'><Link to="/customized-graves">Customized Graves</Link></button></li>
          <li><button className='btn btn-success'> <Link to="/downloads" ><i class="fa-solid fa-download"></i> Downloads </Link></button></li>
        </ul>
      </div>
      
    );
}
