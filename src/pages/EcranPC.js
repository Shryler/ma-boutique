import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

const EcranPC = () => {
    return (
        <>
            <NavbarComponent />
            <Container>
                <main>
                    <h1>Ecran PC</h1>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default EcranPC;