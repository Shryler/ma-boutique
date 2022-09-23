import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Category() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("http://maboutique.api/category/" + 0, {
            method: "POST",
            body: JSON.stringify({ with: ['category'] })
        })
            .then(resp => resp.json())
            .then(json => setCategory(json));
    }, [])

    return (<>
        <Container className='my-5 category-container'>
            <h3>Périphériques</h3>
            <div className="category-contain">
                {category.filter(cat => cat.Id_category <= 4).map(cat => {
                    return (
                        <NavLink key={cat.Id_category} to={`/categorie/${cat.Id_category}`} className="category_flex">
                            <img src={cat.img} alt={cat.category} />
                            <p>{cat.category}</p>
                        </NavLink>
                    );
                })}
            </div>
            <h3>Ordinateurs</h3>
            <div className="category-contain">
                {category.filter(cat => cat.Id_category >= 5 && cat.Id_category <= 6).map(cat => {
                    return (
                        <NavLink key={cat.Id_category} to={`/categorie/${cat.Id_category}`} className="category_flex">
                            <img src={cat.img} alt={cat.category} />
                            <p>{cat.category}</p>
                        </NavLink>
                    );
                })}
            </div>
            <h3>Tablettes</h3>
            <div className="category-contain">
                {category.filter(cat => cat.Id_category >= 7 && cat.Id_category <= 8).map(cat => {
                    return (
                        <NavLink key={cat.Id_category} to={`/categorie/${cat.Id_category}`} className="category_flex">
                            <img src={cat.img} alt={cat.category} />
                            <p>{cat.category}</p>
                        </NavLink>
                    );
                })}
            </div>
        </Container>
    </>
    );
}

export default Category;