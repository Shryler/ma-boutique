import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

function FilterProducts({ setCategory, isHereBrands, id }) {

    const [brands, setBrands] = useState(null);
    const [filter, setFilter] = useState({ refSelect: "", brandSelect: { id: 0 } })
    const inputRef = useRef();
    const selectRef = useRef();

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

    useEffect(() => {
        inputRef.current.value = "";
        selectRef.current.selectedIndex = 0;
    }, [id])

    useEffect(() => {
        setCategory((prevValue) => {
            if (!prevValue) {
                return prevValue;
            }
            prevValue.filter_product = prevValue?.products_list.filter((a) => {
                return a?.designation?.toLowerCase().includes(filter.refSelect.toLowerCase()) &&
                    (filter.brandSelect.id === '0' ? true : filter.brandSelect.id === a.Id_brand);
            })
            return { ...prevValue };
        })
    }, [filter, setCategory])

    return (
        <div className="filter">
            <h4>Filtrer les produits :</h4>
            <hr />
            <div className='containerInput'>
                <label htmlFor="">Chercher une référence</label>
                <input type="text" className='form-control' ref={inputRef} placeholder='Désignation, modèle...' onChange={(e) => setFilter((pv) => ({ ...pv, refSelect: e.target.value }))} />
            </div>
            <div className='containerInput'>
                <label htmlFor="">Marque</label>
                <select name="brand" id="brand-select" className='form-control' ref={selectRef} onChange={(e) => setFilter((pv) => ({ ...pv, brandSelect: e.target.options[e.target.selectedIndex] }))}>
                    <option id={0} value="">-- Sélectionner une marque --</option>
                    {
                        brands?.filter((e) => isHereBrands.includes(e.Id_brand)).map(brand => {
                            return (
                                <option key={brand.Id_brand} id={brand.Id_brand} value={brand.name_brand}>{brand.name_brand}</option>
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