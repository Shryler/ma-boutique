import React from 'react';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';
import ReseauxSociaux from '../components/ReseauxSociaux';

const PageNotFound = () => {
    return (
        <div>
            <NavbarComponent />
            <ReseauxSociaux />
            <h1 className='vh-100 text-center pt-5'>Page Not Found</h1>
            <Footer />
        </div>
    );
};

export default PageNotFound;