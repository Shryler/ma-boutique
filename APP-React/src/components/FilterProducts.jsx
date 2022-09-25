import React, { useEffect, useState } from 'react';

function FilterProducts() {

    const [brands, setBrands] = useState(null);

    useEffect(() => {
        fetch("http://maboutique.api/brand/")
            .then(resp => resp.json())
            .then(json => {
                json = json.sort((a, b) => {
                    return a.name_brand.toLowerCase() > b.name_brand.toLowerCase() ? 1 : -1;
                });
                setBrands(json);
            });
    }, [])

    return (
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
                <option value="">-- Sélectionner une marque --</option>
            {
                brands?.map(brand => {
                    return (
                        <option key={brand.Id_brand} value={brand.name_brand}>{brand.name_brand}</option>
                    )
                })
            }
            </select>
        </div>
        <div className='containerInput'>
            <label htmlFor="">Prix (min, max)</label>
            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
        </div>
    </div>
    );
}

export default FilterProducts;