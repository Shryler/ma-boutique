import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import TypeWriter from './animations/TypeWriter';
import { BsPhone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
        <footer>
            <div className="newsletters">
                <Container>
                    <p>inscription à la newsletter</p>
                </Container>
            </div>
            <div className="footer">
                <Container>
                    <div className='row footer-contain'>
                        <div className="col-sm-12 col-lg-3 title-typewriter">
                            <h1>maBoutique</h1>
                            <TypeWriter />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 footer-navigation">
                            <h3>Navigation</h3>
                            <ul className='footer-navigation-container'>
                                <li><NavLink to="/">Accueil</NavLink></li>
                                <ul className='footer-navigation-sub'>Périphériques
                                    <li><NavLink to="/ecran-PC">Ecran PC</NavLink></li>
                                    <li><NavLink to="/clavier-souris-tapis">Clavier/Souris/Tapis</NavLink></li>
                                    <li><NavLink to="/casque-micro">Casque & micro</NavLink></li>
                                    <li><NavLink to="/webcam">Webcam</NavLink></li>
                                </ul>
                                <li><NavLink to="/ordinateurs-portables">Ordinateurs Portables</NavLink></li>
                                <li><NavLink to="/ordinateurs-fixe">Ordinateurs PC Fixe</NavLink></li>
                                <ul className='footer-navigation-sub'>Tablettes
                                    <li><NavLink to="/tablette">Tablette</NavLink></li>
                                    <li><NavLink to="/ipad">Ipad</NavLink></li>
                                </ul>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <h3>Coordonnées</h3>
                            <div className="text-start">
                                <div className='m-2'>
                                    <p className='m-2 d-flex justify-content-center align-items-center'><GoLocation /><span className='px-2'>Localisation</span></p>
                                    <a href="https://goo.gl/maps/Ya7hxMa6xnLhyakN8" rel="noreferrer" target="_blank"><button type='button' className="btn btn-sm btn-custom-color w-100">55 Rue de la Paix<br /> 75000 Paris</button></a>
                                </div>
                                <div className='m-2'>
                                    <p className='m-2 d-flex justify-content-center align-items-center'><BsPhone /><span className='px-2'>Téléphone</span></p>
                                    <a href="tel:09-75-25-25-25"><button type='button' className="btn btn-sm btn-custom-color w-100">09 75 25 25 25</button></a>
                                </div>
                                <div className='m-2'>
                                    <p className='m-2 d-flex justify-content-center align-items-center'><FiMail /><span className="px-2">Mail</span></p>
                                    <a href="mailto:fake-mail@gmail.com"><button type='button' className="btn btn-sm btn-custom-color w-100">fake-mail@gmail.com</button></a>
                                </div>
                                <div className="m-2">
                                    <a href="/" className='m-2 d-flex justify-content-center align-items-center'>Mentions légales</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <h3>Partenaires</h3>
                        </div>
                    </div>
                    <div className="row mt-4 copyright">
                        <p>Copyright © 2022 - Conception & Design par <a href="https://github.com/Shryler" target="_blank" rel="noreferrer" alt="Concepteur/Designer">Shryler</a> - Crédits Images <a href="https://www.ldlc.com/" target="_blank" rel="noopener noreferrer">LDLC</a></p>
                        <em className='text-uppercase'>Dossier fil rouge (dwwm) - titre professionnel développeur web et web mobile</em>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;