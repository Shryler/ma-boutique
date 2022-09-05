import React from 'react';
import { Container } from 'react-bootstrap';
import FilterProducts from '../components/FilterProducts';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';

const Products = () => {
    return (
        <>
            <NavbarComponent />
            <Container>
                <main>
                    <h1>Liste des produits</h1>
                    <FilterProducts />
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Products;