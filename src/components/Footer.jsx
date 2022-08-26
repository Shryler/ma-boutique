import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TypeWriter from './animations/TypeWriter';

const Footer = () => {
    return (
        <footer>
        <div className="newsletters">
            <Container>
                <p>Newsletters</p>
            </Container>
        </div>
        <div className="footer">
            <Container>
                <div className='row footer-contain'>
                    <div className="col-3 title-typewriter">
                        <h1>maBoutique</h1>
                        <TypeWriter />
                    </div>
                    <div className="col-3">
                        <h3>A propos</h3>
                    </div>
                    <div className="col-3">
                        <h3>Navigation</h3>
                        <p>cat2</p>
                    </div>
                    <div className="col-3">
                        <h3>Coordonnées</h3>
                        <p>cat3</p>
                    </div>
                </div>
            </Container>
        </div>
        </footer>
    );
};

export default Footer;