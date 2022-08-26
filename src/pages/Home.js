import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import CarouselPrincipal from '../components/animations/Carousel';
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
                    <section>
                        <h1>Home</h1>
                    </section>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Home;