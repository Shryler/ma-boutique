import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom';

function ProductDetailScreen() {

    const { id } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("http://maboutique.api/product/" + id, {
            method: "POST",
            body: JSON.stringify({ with: [{ category: "category_product" }] })
        })
            .then(resp => resp.json())
            .then(json => {
                // console.log(json);
                setProducts(json);
            });
    }, [id]);

    return (
        <section className='container pt-3'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item d-flex align-items-center"><BsFillHouseFill /><NavLink to="/" className='ps-1'>maBoutique</NavLink></li>
                    <li className="breadcrumb-item" aria-current="page"><NavLink to={`/categorie/${products?.category_list?.category?.Id_category}`} className="ps-1">{products?.category_list?.category?.category}</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">{products?.designation}</li>
                </ol>
            </nav>
            <div className='productDetail'>
                <div>
                    <h2 className="title">{products?.designation}</h2>
                    <p className='minDesc'>{products?.min_description}</p>
                </div>
                <div className="detailProduct">
                    <div className='img-container'>
                        <img src={products?.image} alt={"Image de :" + products?.designation} />
                    </div>
                    <div className="desc-container">
                        <p>{products?.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailScreen;