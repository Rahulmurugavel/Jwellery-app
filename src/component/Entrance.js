import React from 'react'
import myModule from "../component/Entrance.module.css";
import image from "./image";
import Header from "./header";
import Footer from './footer';
const Entrance = () => {
  return (
    <div>
        <Header></Header>
        <div className={myModule.space}></div>
        <nav>
        <div id="carouselExampleIndicators" class="carousel slide container">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={image.carousel1} class="d-block w-100" style={{borderRadius:"30px"}} alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={image.carousel2} class="d-block w-100" style={{borderRadius:"30px"}} alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={image.carousel3} class="d-block w-100" style={{borderRadius:"30px"}} alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={image.carousel4} class="d-block w-100" style={{borderRadius:"30px"}} alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        <br></br>
        <div class="container"> 
            <div class="row">
                <div class="col-lg-6">
                    <div className={myModule.imghover}>
                        <img src={image.necklace} alt="necklace" height="300px"
                        width="650px" className={myModule.img1} style={{borderRadius:"20px"}}></img>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h1>Purity & Trust</h1>
                    <hr style={{width:"40%",border:"2px solid black"}}></hr>
                    <p>For over four decades, Lalithaa Jewellery has garnered the trust & love of jewellery buyers across South India with its unique South Indian jewellery collections. While exquisiteness of designs is a formidable factor, absolute transparency in pricing and market’s lowest V.A. Charges are the other reasons why we are the most preferred name for all things precious in Jewellery.</p>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-lg-6">
                  <h1>Video Shopping - Coming soon</h1>
                  <hr style={{width:"90%",border:"2px solid black"}}></hr>
                  <p>Soon, you can browse, select and shop for your favourite jewellery from Lalithaa with our special video call feature. Experience personalized real-time shopping with our video call feature and get the experience of shopping at Lalithaa store replicated at your home!</p>
                </div>
                <div class="col-lg-6">
                    <div className={myModule.imghover}>
                        <img src={image.necklace1} alt="necklace" height="300px"
                        width="650px" className={myModule.img1} style={{borderRadius:"20px"}}></img>
                    </div>
                </div>
            </div>
        </div>
        </nav>
        <br></br>
       <Footer></Footer>
    </div>
  )
}

export default Entrance;