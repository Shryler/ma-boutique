import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import CarouselPrincipal from '../components/animations/Carousel';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

const EcranPC = () => {
    return (
        <>
            <NavbarComponent />
            <Container fluid>
                    <CarouselPrincipal />
            </Container>
            <Container>
                <main>
                    <section>
                        <h1>Ecran PC</h1>
                    </section>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default EcranPC;