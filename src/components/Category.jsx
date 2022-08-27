import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div className="category-contain">
            <div className="my-4">
                <h3>Périphériques</h3>
                <div className='d-flex gap-5 justify-content-center flex-wrap'>
                    <NavLink to="/ecran-PC">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4275.jpg" alt="" />
                        <p>Ecran PC</p>
                    </NavLink>
                    <NavLink to="/clavier-souris-tapis">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4274.jpg" alt="" />
                        <p>Clavier/Souris/Tapis</p>
                    </NavLink>
                    <NavLink to="/casque-micro">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4273.jpg" alt="" />
                        <p>Casque & micro</p>
                    </NavLink>
                    <NavLink to="/webcam">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4287.jpg" alt="" />
                        <p>Webcam</p>
                    </NavLink>
                </div>
            </div>
            <hr />
            <div className="my-4">
                <h3>Ordinateurs</h3>
                <div className='d-flex gap-5 justify-content-center flex-wrap'>
                    <NavLink to="/ordinateurs-portables">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4195.jpg" alt="" />
                        <p>Ordinateurs Portables</p>
                    </NavLink>
                    <NavLink to="/ordinateurs-fixe">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4194.jpg" alt="" />
                        <p>Ordinateurs PC Fixe</p>
                    </NavLink>
                </div>
            </div>
            <hr />
            <div className="my-4">
                <h3>Tablettes</h3>
                <div className='d-flex gap-5 justify-content-center flex-wrap'>
                    <NavLink to="/tablette">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/7630.jpg" alt="" />
                        <p>Tablette</p>
                    </NavLink>
                    <NavLink to="/ipad">
                        <img src="https://media.ldlc.com/r100/ld/categories/thumbnails/4271.jpg" alt="" />
                        <p>Ipad</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Category;