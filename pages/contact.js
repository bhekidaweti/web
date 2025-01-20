import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <section className="container text-center mt-4">
                <h1>Contact Us</h1>
                <p>For all your grave services needs, please contact us using the details below:</p>
                <p><i class="fa-solid fa-location-dot"></i> 956 Legodi Street, Mohlakeng, Randfontain</p>
                <p><i class="fa-solid fa-phone"></i> Phone: 082 361 0300</p>
                <p><i class="fa-solid fa-envelope"></i> Email: digwamajegraveservices23@gmail.com</p>
                <p><i class="fa-brands fa-facebook"></i> Facebook: </p>
                <p><i class="fa-brands fa-twitter"></i> Twitter: </p>
                <p><i class="fa-brands fa-instagram"></i> Instagram: </p>  
                
            </section>
            <Footer />
        </>
    );
}
