import axios from 'axios';
import React, { Component } from 'react';
import { BsBasket } from 'react-icons/bs';
import ToolTips from './animations/ToolTips';

export default class FilterProducts extends Component {
    state = {
        products: null,
    }

    componentDidMount = () => {
        axios.get(`http://api-maboutique/API/products/`)
            .then(res => {
                this.setState({ products: Object.values(res.data) });
            })
    };

    render() {
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
                    <div className="products" >
                        {/* MAP */}
                        {
                            this.state.products &&
                            this.state.products.map(product => {
                                return (
                                    <div className="products-container" key={product.id_product}>
                                        <div className="products-img">
                                            <img src={product.img} alt="" />
                                        </div>
                                        <div className="products-details">
                                            <div className="info">
                                                <div>
                                                    <div className="title">{product.designation}</div>
                                                    <div className="min-desc">{product.min_description}</div>
                                                </div>
                                            </div>
                                            <div className="swiper-item-details price">
                                                <div className='container-stock'>
                                                    <div className="stock-title">Dispo</div>
                                                    <div className={product.stock_qty > 0 ? "stock-dispo" : "stock-indispo"}></div>
                                                </div>
                                                <div className='container-price'>
                                                    <div className="swiper-item-price">{product.current_price}€</div>
                                                    <ToolTips button={<BsBasket size="25" />} text={"Ajouter au panier"} classSelect={"swiper-item-basket"}></ToolTips>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
};