import React from 'react';
import './ProductCard.css';
const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-details">
        <h2>{name}</h2>
      {/*  <p>{description}</p>  */}
        <p>{price}</p>
        
      </div>
    </div>
  );
};

export default ProductCard;
