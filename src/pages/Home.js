import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import CarouselPrincipal from '../components/animations/Carousel';
import ReturnTop from '../components/animations/ReturnTop';
import SwiperMod from '../components/animations/Swiper';
import Brands from '../components/Brands';
import Category from '../components/Category';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';
import ReseauxSociaux from '../components/ReseauxSociaux';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <ReseauxSociaux />
            <ReturnTop />
            <Container fluid>
                <CarouselPrincipal />
            </Container>
            <Container>
                <main>
                    <section className='section'>
                        <h2>Nouveautés</h2>
                        <SwiperMod />
                    </section>
                    <section className='section'>
                        <h2>Catégories</h2>
                        <Category />
                    </section>
                    <section className='section'>
                        <h2>Nos shops de marques</h2>
                        <Brands />
                    </section>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Home;