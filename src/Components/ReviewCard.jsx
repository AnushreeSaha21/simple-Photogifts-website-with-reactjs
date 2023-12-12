import React from 'react'
import './ProductCard.css';
const ReviewCard = ({ product }) => {
  const { name, description, image } = product;

  return (
    <div className="product-card review-card">
      <img src={image} alt={name} />
      <div className="product-details review-details">
        <h2>{name}</h2>
        <p>{description}</p>
       
      </div>
    </div>
  );
};

export default ReviewCard
