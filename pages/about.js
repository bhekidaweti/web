import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <section className="container text-center mt-4">
                <h1>About us</h1>
                <p> Professional grave maintenance and cleaning in Soweto, Krugersdorp, Johannesburg, Mogale City and West Rand. </p>
                <p>The company is rendering much needed grave services like:</p>
                    <ul style={{listStyleType: 'none', fontSize: '1.8em'}}>
                        <li><i class="fa-solid fa-check"></i> building grave foundation</li> 
                        <li><i class="fa-solid fa-check"></i> tilling the grave</li>  
                        <li><i class="fa-solid fa-check"></i> grave cleaning & restoration </li> 
                        <li><i class="fa-solid fa-check"></i> we also sell tombstones and et</li>
                    </ul>
                <p>Explore our affordable and high-quality tombstones, headstones and grave maintenance package </p>
            </section>
            <Footer />
        </>
    );
}
