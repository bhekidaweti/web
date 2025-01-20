import services from '../data/services';


export default function Services() {
    return (
        <div className="container text-center mt-4">
            <div className="container">
                    <div className='services'   style={{listStyleType: 'none', fontSize: '1.8em'}}>
                        {services.map(service => (
                            <div key={service.id}>
                            <i className={`fas ${service.icon}`}></i> {service.name}
                                {/* <img src={service.img} alt={service.name} className='services-image' /> */}
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
}