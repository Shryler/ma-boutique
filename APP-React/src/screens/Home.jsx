import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselPrincipal from '../components/animations/Carousel';
import SwiperMod from '../components/animations/Swiper';
import Brands from '../components/Brands';
import Category from '../components/Category';

function Home() {
    return (
        <>
            <div id="changeColor">
                <CarouselPrincipal />
                <Container className='pad400'>
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
                </Container>
            </div>
        </>
    );
};

export default Home;