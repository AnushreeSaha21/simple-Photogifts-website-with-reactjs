import React from 'react';
import ProductCard from './ProductCard'; 
import './ProductList.css';
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Photo Frames',
      
      price: '₹348 for 1 Frame'      ,
      image: 'https://printo-s3.mobimedia.ai/site/20230628_165507992662_b8241f_Photo-Frame.jpg?quality=70&format=webp&w=640'
    },
    {
      id: 2,
      name: 'Acrylic Photo Prints',
      
      price: '₹383 for 1 Acrylic print',
      image: 'https://printo-s3.mobimedia.ai/site/20230628_165542122177_8ab0fe_Premium-Acrylic-Desk.jpg?quality=70&format=webp&w=1080'
    },


    {
      id: 3,
      name: 'Canvas Prints',
      
      price: '₹728 for 1 Wrap',
      image: 'https://printo-s3.mobimedia.ai/site/20230628_165459382077_1caa5c_Canvas-Gallery-Wrap.jpg?quality=70&format=webp&w=640'
    },

    {
      id: 4,
      name: 'LED Photo Frames',
      
      price: '₹2832 for 1 Frame',
      image: 'https://printo-s3.mobimedia.ai/site/20230628_165624515721_efa751_LED-frames.jpg?quality=70&format=webp&w=640'
    },

    {
      id: 5,
      name: 'Photo Mugs',
      price: '₹302 for 1 Mug',
      image: 'https://printo-s3.mobimedia.ai/site/20230626_185207071323_01e323_Photo-Mugs.jpg?quality=70&format=webp&w=640'
    },

    {
      id: 6,
      name: 'T-Shirts',
      price: '₹228 for 1 T-shirt',
      image: 'https://printo-s3.mobimedia.ai/site/20230626_185210982610_81c87c_T-shirt.jpg?quality=70&format=webp&w=640'
    }
  ];

  return (
    <>
      <div className="container">
        <div>
          <h1>Personalized Photo
            Gifts</h1>
        </div>
        <div>
          <div className="sub-container-top">
            <span className="sub-container">Custom
              printed gifts for your cherished ones! Gift them the favourite memories you shared together!</span>
          </div>
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

export default ProductList;
