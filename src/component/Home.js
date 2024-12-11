import React from 'react'
import { Link } from 'react-router-dom';
import Header from "./header";
import Footer from './footer';
import image from "../component/image";
import myModule from "../component/Entrance.module.css";
import homecss from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className={myModule.space}></div>
      <br></br>
      <nav class="container">
        <img src={image.hr}></img>
        <h1 className={homecss.style}>Gold Jewellery</h1>
        <h5 className={homecss.style}>Embrace the golden glow this festive season</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src={image.bangles} alt="bangle" type="button" className={homecss.posters}></img>
          </div>
          <div class="col-lg-6">
            <img src={image.neck} alt="necklace" type="button" className={homecss.posters}></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-lg-6">
            <img src={image.earrings} alt="earrings" type="button" className={homecss.posters}></img>
          </div>
          <div class="col-lg-6">
            <img src={image.rings} alt="rings" type="button" className={homecss.posters}></img>
          </div>
        </div>
        <img src={image.hr}></img>
        <h1 className={homecss.style}>Diamond Jewellery</h1>
        <h5 className={homecss.style}>Sparkle through the festive nights with timeless diamonds</h5>
        <div class="row">
          <div class="col-lg-4">
            <img src={image.heroine} alt="actress" type="button" className={homecss.heroine}></img>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <img src={image.pedant} alt="set" type="button" className={homecss.pedantset}></img>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <img src={image.stunningear} alt="ear" type="button" className={homecss.ringsearrings}></img>
              </div>
              <div class="col-lg-6">
                <img src={image.sleekrings} alt="rings" type="button" className={homecss.ringsearrings}></img>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <img src={image.hr}></img>
        <h1 className={homecss.style}>Gold Jewellery</h1>
        <h5 className={homecss.style}>Embrace the golden glow this festive season</h5>
        <div class="row">
          <div class="col-lg-4">
            <img src={image.coin} alt="coin" type="button" className={homecss.poster}></img>
          </div>
          <div class="col-lg-4">
            <img src={image.bar} alt="bar" type="button" className={homecss.poster}></img>
          </div>
          <div class="col-lg-4">
            <img src={image.coins} alt="coins" type="button" className={homecss.poster}></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-lg-4">
            <img src={image.noserings} alt="rings" type="button" className={homecss.poster}></img>
          </div>
          <div class="col-lg-4">
            <img src={image.diamondbangle} alt="bangle" type="button" className={homecss.poster}></img>
          </div>
          <div class="col-lg-4">
            <img src={image.mangal} alt="mangal" type="button" className={homecss.poster}></img>
          </div>
        </div>
      </nav>
      <br></br>
      <Footer></Footer>
    </div>
  )
}

export default Home