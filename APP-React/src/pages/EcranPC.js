import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

const EcranPC = () => {
    return (
        <>
            <NavbarComponent />
            <Container>
                <main>
                    <h1>Ecran PC</h1>
                    <NavLink to="/produits">Voir Les produits</NavLink>
                </main>
    
            </Container>
            <Footer />
        </>
    );
};

export default EcranPC;