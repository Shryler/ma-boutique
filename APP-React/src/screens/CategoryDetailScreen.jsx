import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CategoryDetailScreen() {

    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch("http://maboutique.api/category/" + id, {
            method: "POST",
            body: JSON.stringify({ with: ['product'] })
        })
            .then(resp => resp.json())
            .then(json => {
                // console.log(json);
                setCategory(json);
            });
    }, [id])

    return (<>
        <div>
            <h1>Catégorie : {category?.category}</h1>
        </div>
    </>);
}

export default CategoryDetailScreen;