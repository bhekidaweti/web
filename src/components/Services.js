import { Link } from 'react-router-dom';
import services from '../data/services';


export default function Services() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Services</h1>
            <div className="row">
                {services.map((service) => (
                    <div key={service.id} className="col-12 col-md-4 mb-4">
                        <div className="card text-center shadow-sm h-100">
                            <div className="card-body">
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="mb-3 img-fluid"
                                    style={{ maxWidth: "400px" }}
                                />
                                <h3 className="card-title">{service.name}</h3>
                                <p></p>
                                <h5 className='card-title' style={{color: "goldenrod"}}>R {service.price}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className='btn btn-warning'><Link to='/other-services'>Other Services</Link></button>
        </div>
    );
}