const Home = () => {
    return (
     <div className="home-page">
            <section className="image-gallery">
                <div className="image-container">
                    <img
                        src="/images/slide1.jpg" 
                        alt="Grave Services" 
                    />
                     <img
                        src="/images/slide1.jpg" 
                        alt="Grave Services" 
                    />
                    <img
                        src="/images/slide1.jpg" 
                        alt="Grave Services" 
                    />
                    <div className="text-overlay">
                        <p style={{color: "goldenrod"}}>Digwamaje Grave Services</p>
                        <p>Restoration for the Departed</p>
                    </div>
                </div>
            </section>    
     </div>
    ); 
 };
 
 export default Home;