import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import CarouselPrincipal from '../components/animations/Carousel';
import SwiperMod from '../components/animations/Swiper';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Container fluid>
                    <CarouselPrincipal />
            </Container>
            <Container>
                <main>
                    <section className='section-nouveautes'>
                        <h2>Nouveautés</h2>
                        <SwiperMod />
                    </section>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Home;