import React, { useEffect, useState } from 'react';
import { BsBasket, BsFillHouseFill } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom';
import ToolTips from '../components/animations/ToolTips';
import FilterProducts from '../components/FilterProducts';

function CategoryDetailScreen() {

    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [isHereBrands, setIsHereBrands] = useState([]);
    const [isHerePrice, setIsHerePrice] = useState([]);

    useEffect(() => {
        fetch("http://maboutique.api/category/" + id, {
            method: "POST",
            body: JSON.stringify({ with: [{ product: "category_product" }] })
        })
            .then(resp => resp.json())
            .then(json => {
                json.filter_product = json.products_list
                setCategory(json);
                const brandArray = [];
                const priceArray = [];
                for (const product of json.products_list) {
                    priceArray.push(product.current_price);
                    brandArray.push(product.Id_brand);
                }
                setIsHereBrands(brandArray);
                setIsHerePrice(priceArray);
            });
        }, [id])

    return (<>
        <section>
            <div className="containerFilterProducts">
                <FilterProducts setCategory={setCategory} isHereBrands={isHereBrands} isHerePrice={isHerePrice} id={id} />
                <div className="products" >
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item d-flex align-items-center"><BsFillHouseFill /><NavLink to="/" className='ps-1'>maBoutique</NavLink></li>
                            <li className="breadcrumb-item active" aria-current="page">{category?.category}</li>
                        </ol>
                    </nav>
                    {
                        category?.filter_product.length === 0 ? <div>Aucun article disponible</div> :
                            category?.filter_product?.map(product => {
                                return (
                                    <NavLink to={`/categorie/${category.Id_category}/detail/${product.Id_product}`} className="link_categorydetail" key={product.Id_product}>
                                        <div className="products-container container" >
                                            <div className="products-img">
                                                <img src={product.image} alt="" />
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
                                    </NavLink>
                                );
                            })
                    }
                </div>
            </div>
        </section>
    </>);
}

export default CategoryDetailScreen;