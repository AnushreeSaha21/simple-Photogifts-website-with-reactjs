import React from 'react';
import ProductCard from './ProductCard'; 
import './ProductList.css';
const SecondProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Photo Books',
            
            price: '₹782 for 1 Book',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143856168479_2d507e_Photo-book.jpg?quality=70&format=webp&w=1920'
        },
        {
            id: 2,
            name: 'Photo Prints',
            
            price: '₹4 each for 20 Prints',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_165908813300_c2522a_Retro-Photo-Prints.jpg?quality=70&format=webp&w=1920'
        },
        

        {
            id: 3,
            name: 'Fridge Magnets',
            
            price: '₹392 for 1 Magnet',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143911521515_3cf155_Fridge-Magnets.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 4,
            name: 'Posters',
            
            price: '₹35 for 1 Posters',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143929401594_653bc1_Poster.jpg?quality=70&format=webp&w=828'
        },

        {
            id: 5,
            name: 'Frameless Photo Frames',
            
            price: '₹442 for 1 Frame',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143905314642_fd50f5_Frameless-photo-frame.jpg?quality=70&format=webp&w=828'
        },
        {
            id: 6,
            name: 'Photo Plaque',
            
            price: '₹1593 for 1 Plaque',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143924394333_e7c693_Photo-Plaque.jpg?quality=70&format=webp&w=640'
        },
        {
            id: 7,
            name: 'Photo Decor Box',
            
            price: '₹706 for 1 Box',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_165449757794_ac12ed_Photo-Decor-gift.jpg?quality=70&format=webp&w=640'
        },
        {
            id: 8,
            name: 'Personalised Chocolates',
            
            price: '₹708 for 1 Box',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143916622199_9e1db4_Personalized-Chocolates.jpg?quality=70&format=webp&w=828'
        },

        {
            id: 9,
            name: 'Decals',
            
            price: '₹141 for 1 Decal',
            image: 'https://printo-s3.mobimedia.ai/site/20230628_143900579515_d77c9a_decals.jpg?quality=70&format=webp&w=828'
        }
    ];

    return (
        <>
            <div className="container">
                <div>
                    <h1>Recollection of Memories</h1>
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

export default SecondProductList;
