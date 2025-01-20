import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Img from 'next/image';


export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <section className="container text-center mt-4">
                <h1>Welcome to Digwamaje Grave Services</h1>
                <p>Your trusted partner for dignified grave services.</p>
            </section>

            <section className="image-gallery">
                <div className="image-container">
                    <Img 
                        src="/images/slide1.jpg" 
                        alt="Grave Services" 
                        height="200"
                        width="200"
                    />
                </div>
                <div className="image-container">
                    <Img 
                        src="/images/slide2.jpg" 
                        alt="Grave Services"
                        height="200"
                        width="200"
                     />
                </div>
            </section>

            <Footer />
        </>
    );
}

