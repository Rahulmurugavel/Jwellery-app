import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import image from '../component/image'; 
import myModule from '../component/Entrance.module.css'; 
import productstyle from './Product.module.css'; 

const Products = () => {
  // Array of images imported from the 'image' module
  const images = [
    image.product1,
    image.product2,
    image.product3,
    image.product4,
    image.product5,
    image.product6,
    image.product7,
    image.product8,
    image.product9,
    image.product10,
    image.product11,
    image.product12,
  ];

  return (
    <div>
      <Header />
      <nav className="container">
        <div className={productstyle.space}></div>
        <img src={image.hr}></img>
        <div className={productstyle['image-grid']}>
          {/* Manually rendering each grid item without using .map() */}
          <div className={productstyle['grid-item']}>
            <Link to="/product/1">
              <img src={image.product1} alt="product-1" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Ear Rings Elegance</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
            
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/2">
              <img src={image.product2} alt="product-2" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Swan Ear Rings</h6>
               <h6 className={productstyle.align}>RS:15,000 &nbsp; <del>22,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/3">
              <img src={image.product3} alt="product-3" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Dazzling chain</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/4">
              <img src={image.product4} alt="product-4" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Diamond Elegance chain</h6>
               <h6 className={productstyle.align}>RS:40,000 &nbsp; <del>52,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/5">
              <img src={image.product5} alt="product-5" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Marvellous Neck Hang</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/6">
              <img src={image.product6} alt="product-6" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Elegance Bloom neck chain</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/7">
              <img src={image.product7} alt="product-7" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Bloom Necklace</h6>
               <h6 className={productstyle.align}>RS:27,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/8">
              <img src={image.product8} alt="product-8" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Fabulous Rings</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/9">
              <img src={image.product9} alt="product-9" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Mangal chain</h6>
               <h6 className={productstyle.align}>RS:2,00,000 &nbsp; <del>2,29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/10">
              <img src={image.product10} alt="product-10" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Marvellous Rings</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/11">
              <img src={image.product11} alt="product-11" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Ear Rings Elegance</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
          <div className={productstyle['grid-item']}>
            <Link to="/product/12">
              <img src={image.product12} alt="product-12" />
            </Link>
            <div className={productstyle.price}>
               
               <h6 className={productstyle.align}>Hand Bracelet Ring</h6>
               <h6 className={productstyle.align}>RS:20,000 &nbsp; <del>29,000</del></h6>
             
            </div>
          </div>
        </div>
      </nav>
      <Footer />
    </div>
  );
};

export default Products;
