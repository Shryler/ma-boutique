import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Container>
                <main>
                    <h1>Home</h1>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Home;