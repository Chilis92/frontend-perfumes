import React, { useState, useEffect } from 'react';
import CatalogItem from './CatalogItem';
import catalogData from '../data/catalogData.json';

const CatalogPage = () => {
    const [catalogItems, setCatalogItems] = useState([]);

    useEffect(() => {
        setCatalogItems(catalogData);
    }, []);

    return (
        <div className="catalog-page">
            <h1>Catalog</h1>
            <div className="catalog-list">
                {catalogItems.map(item => (
                    <CatalogItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;

/*
API Ready
import React, { useState, useEffect } from 'react';
import CatalogItem from './CatalogItem';

const CatalogPage = () => {
    const [catalogItems, setCatalogItems] = useState([]);

    useEffect(() => {
        fetchCatalogItems();
    }, []);

    const fetchCatalogItems = async () => {
        try {
            const response = await fetch('https://perfumes-production.up.railway.app/api/v1/products');
            const data = await response.json();
            setCatalogItems(data);
        } catch (error) {
            console.error('Error fetching catalog items:', error);
        }
    };

    return (
        <div className="catalog-page">
            <h1>Catalog</h1>
            <div className="catalog-list">
                {catalogItems.map(item => (
                    <CatalogItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
*/