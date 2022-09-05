import React from 'react';
import { BsBasket } from 'react-icons/bs';
import ToolTips from './animations/ToolTips';

const FilterProducts = () => {
    return (
        <section>
            <div className="containerFilterProducts">
                <div className="filter">
                    <h4>Filtrer les produits :</h4>
                    <hr />
                    <div className='containerInput'>
                        <label htmlFor="">Chercher une référence</label>
                        <input type="text" className='form-control' placeholder='Désignation, modèle...' />
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="">Marque</label>
                        <select name="pets" id="pet-select" className='form-control' placeholder='Désignation, modèle...'>
                            <option value="">--Please choose an option--</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </div>
                    <div className='containerInput'>
                        <label htmlFor="">Prix (min, max)</label>
                        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                    </div>
                </div>
                <div className="products">
                    <h1>Produits</h1>
                    <div className="products-container">
                        <div className="products-img">
                            <img src="https://media.ldlc.com/r150/ld/products/00/05/59/42/LD0005594295_2.jpg" alt="" />
                        </div>
                        <div className="products-details">
                            <div className="info">
                                <div>
                                    <div className="title">Acer 24.5" LED - Nitro VG252QPbmiipx</div>
                                    <div className="min-desc">1920 x 1080 pixels - 2 ms (gris à gris) - Format large 16/9 - Dalle IPS - 144 Hz - G-Sync Compatible - HDMI/DisplayPort - Noir</div>
                                </div>
                                <div className="avis">50 avis</div>
                            </div>
                            <div className="price">99€</div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <h1>Produits</h1>
                    <div className="products-container">
                        <div className="products-img">
                            <img src="https://media.ldlc.com/r150/ld/products/00/05/59/42/LD0005594295_2.jpg" alt="" />
                        </div>
                        <div className="products-details">
                            <div className="info">
                                <div>
                                    <div className="title">Acer 24.5" LED - Nitro VG252QPbmiipx</div>
                                    <div className="min-desc">1920 x 1080 pixels - 2 ms (gris à gris) - Format large 16/9 - Dalle IPS - 144 Hz - G-Sync Compatible - HDMI/DisplayPort - Noir</div>
                                </div>
                                <div className="avis">50 avis</div>
                            </div>
                            <div className="swiper-item-details price">
                                <div className="swiper-item-price">100€<sup>00</sup></div>
                                <ToolTips button={<BsBasket size="25" />} text={"Ajouter au panier"} classSelect={"swiper-item-basket"}></ToolTips>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterProducts;