import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CategoryDetailScreen() {

    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch("http://maboutique.api/category/" + id, {
            method: "POST",
            body: JSON.stringify({ with: [ "category" ] })
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                setCategory(json);
            });
    }, [id])

    return (<>
        <div>
            <h1>Catégorie : {category?.category}</h1>
            {
                category?.products_list.map(product => {
                    return (
                        <div key={product.Id_product}>
                            <p>{product.designation}</p>
                            <p>{product.min_description}</p>
                            <p>{product?.brand?.name_brand}</p>
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    </>);
}

export default CategoryDetailScreen;