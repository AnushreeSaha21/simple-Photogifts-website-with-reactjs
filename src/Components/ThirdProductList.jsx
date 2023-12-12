import React from 'react';
import ProductCard from './ProductCard'; 
import './ProductList.css';
const ThirdProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Personalized Tote Bag',
            
            price: '₹288 for 1 Bag',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_204758861131_44d5bc_Tote-bag.jpg?quality=70&format=webp&w=1920'
        },
        {
            id: 2,
            name: 'Pop Socket',
            
            price: '₹135 for 1 Socket',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_204838763358_1e22ff_Pop-Socket.jpg?quality=70&format=webp&w=1920'
        },
        

        {
            id: 3,
            name: 'Laptop Sleeve',
            
            price: '₹1020 for 1 Sleeve',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_204818787314_177f66_Laptop-sleeves.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 4,
            name: 'Custom Mousepad',
            
            price: '₹234 for 1 Mousepad',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_204847107243_febf99_Mouse-pad.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 5,
            name: 'Acrylic Keychain',
            
            price: '₹123 for 1 keychain',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_204902560896_5611d7_Acralyic-keychain.jpg?quality=70&format=webp&w=1920'
        },
        {
            id: 6,
            name: 'Button Badge',
            
            price: '₹37 each for 10 Badges',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205443921215_e3460c_Button-Batch.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 7,
            name: 'Personalized Notebooks',
            
            price: '₹118 for 1 Book',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_204923914381_54c183_Notebook.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 8,
            name: 'Pens',
            
            price: '₹259 for 1 Pen',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205351076195_6790ba_pen.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 9,
            name: 'Luggage Tag ',
            
            price: '₹141 for 1 Tag',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205402997108_fd0eb1_Luggage-tag.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 10,
            name: 'Slipper Bottles',
            
            price: '₹414 for 1 Bottle',
            image: 'https://printo-s3.mobimedia.ai/site/20230626_205156851583_2c1d62_Drinkware.jpg?quality=70&format=webp&w=1920'
        },

        {
            id: 11,
            name: 'Gift Wrapping Paper',
            
            price: '₹13 for 1 Paper',
            image: 'https://printo-s3.mobimedia.ai/site/20230915_163225787204_780370_Gift-wrapping-paper.jpg?quality=70&format=webp&w=1920'
        }
    ];

    return (
        <>
            <div className="container">
                <div>
                    <h1>Accessories</h1>
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

export default ThirdProductList;
