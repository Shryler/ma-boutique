import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import LoginAndRegistration from '../components/LoginAndRegistration';
import NavbarComponent from '../components/Navbar';

const Register = () => {
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

export default Register;