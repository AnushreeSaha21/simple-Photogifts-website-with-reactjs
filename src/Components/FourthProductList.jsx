import React from 'react';
import ProductCard from './ProductCard'; 
import './ProductList.css';
const FourthProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Personalized Ludo',
            
            price: '₹295 for 1 set Ludo',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205914713697_415446_Ludo.jpg?quality=70&format=webp&w=1200'
        },
        {
            id: 2,
            name: 'Puzzles',
            
            price: '₹359 for 1 Puzzle',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205928652985_515105_Puzzles.jpg?quality=70&format=webp&w=1200'
        },
        

        {
            id: 3,
            name: 'Playing Cards',
            
            price: '₹241 for 1 set of Cards',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205921721404_1e4e6f_Playing-Card.jpg?quality=70&format=webp&w=1200'
        }
    ];

    return (
        <>
            <div className="container">
                <div>
                    <h1>Puzzles & Games</h1>
                </div>

            </div>

            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default FourthProductList;
