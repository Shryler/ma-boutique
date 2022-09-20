import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function Category() {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("http://maboutique.api/category")
            .then(resp => resp.json())
            .then(json => setCategory(json));
    }, [])

    const navigate = useNavigate();

    return (<>
        <Container className='my-5 category-container'>
            <h3>Périphériques</h3>
            <div className="category-contain">
                {category.filter(cat => cat.Id_category <= 4).map(cat => {
                    return (
                        <div key={cat.Id_category} onClick={() => { navigate(`/category/${cat.category}`); }} className="d-flex gap-5 justify-content-center flex-wrap">
                            <NavLink to="">
                                <img src={cat.img} alt={cat.category} />
                                <p>{cat.category}</p>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
            <h3>Ordinateurs</h3>
            <div className="category-contain">
                {category.filter(cat => cat.Id_category >= 5 && cat.Id_category <= 6).map(cat => {
                    return (
                        <div key={cat.Id_category} onClick={() => { navigate(`/category/${cat.category}`); }} className="d-flex gap-5 justify-content-center flex-wrap">
                            <NavLink to="">
                                <img src={cat.img} alt={cat.category} />
                                <p>{cat.category}</p>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
            <h3>Tablettes</h3>
            <div className="category-contain">
                {category.filter(cat => cat.Id_category >= 7 && cat.Id_category <= 8).map(cat => {
                    return (
                        <div key={cat.Id_category} onClick={() => { navigate(`/category/${cat.category}`); }} className="d-flex gap-5 justify-content-center flex-wrap">
                            <NavLink to="">
                                <img src={cat.img} alt={cat.category} />
                                <p>{cat.category}</p>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </Container>
    </>
    );
}

export default Category;