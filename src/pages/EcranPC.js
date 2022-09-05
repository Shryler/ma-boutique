import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from '../components/Footer';
import LoginAndRegistration from '../components/LoginAndRegistration';
import NavbarComponent from '../components/Navbar';

const EcranPC = () => {
    return (
        <>
            <NavbarComponent />
            <Container>
                <main>
                    <LoginAndRegistration />
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default EcranPC;