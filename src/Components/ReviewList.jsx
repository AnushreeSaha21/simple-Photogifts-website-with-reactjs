import React from 'react'
import ReviewCard from './ReviewCard';
import './ProductList.css';
const ReviewList = () => {
  const products = [
    {
      id: 1,
      name: 'Google Review',
      description: '4.5 star customer rating',
      
      image: 'https://printo-s3.mobimedia.ai/site/20221025_185631579701_573aa8_Google_Review_1.jpg?quality=70&format=webp&w=1200'
    },
    {
        id: 2,
        name: 'Nationwide Delivery',
        description: 'Delivery within India and internationally.',
        
        image: 'https://printo-s3.mobimedia.ai/site/20221018_230143563117_5a121e_Nationwide_Delivery.jpg?quality=70&format=webp&w=1200'
      },
      {
        id: 3,
        name: 'Satisfaction Guranteed',
        description: 'Free replacement or hassle-free refund without questions',
        
        image: 'https://printo-s3.mobimedia.ai/site/20221018_230225116773_3727ae_Satisfaction_Guranteed.jpg?quality=70&format=webp&w=1200'
      },
      {
        id: 4,
        name: 'Support',
        description: 'Have a question? Talk to us today!',
        
        image: 'https://printo-s3.mobimedia.ai/site/20221018_230312096681_370041_Support.jpg?quality=70&format=webp&w=1200'
      }
  ];
  return (
    <>


  <div className="product-list review-list">
    {products.map(product => (
      <ReviewCard key={product.id} product={product} />
    ))}
  </div>
      </>
  )
}

export default ReviewList
