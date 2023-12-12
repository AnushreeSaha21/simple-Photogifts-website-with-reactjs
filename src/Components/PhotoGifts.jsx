import React from 'react'
import Accordion from './Accordion';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar'
import ProductList from './ProductList';
import ReviewList from './ReviewList';
import SecondProductList from './SecondProductList';
import Widget from './Widget';
import ThirdProductList from './ThirdProductList';
import FourthProductList from './FourthProductList';

function PhotoGifts() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <ProductList/>
    <SecondProductList/>
    <ThirdProductList/>
    <FourthProductList/>
    <Widget/>
    <Accordion/>
    <Banner/>
    <ReviewList/>
    <Footer/> 
    </>
  )
}

export default PhotoGifts
