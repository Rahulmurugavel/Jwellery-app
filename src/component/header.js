import React from 'react'
import image from "../component/image";
import { Link } from 'react-router-dom';
import myModule from "./Entrance.module.css";
const header = () => {
  return (
    <div className={myModule.positionfixed}>
          <header>
            <div className={myModule.sticky1}>
                <div  className={myModule.box}>
                    <img src={image.logo1} className={myModule.logo} alt="logo"></img>
                    <h1 className={myModule.title}>SRM JEWELLERS</h1>
                </div>
                
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <Link to="/" class="navbar-brand" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Explore US</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to="/home" class="nav-link active" aria-current="page" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page" style={{fontFamily:"sans-serif", fontSize:"20px"}}>About</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/products" class="nav-link active" aria-current="page" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Products</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/contact" class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Contacts</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className={myModule.position}>
                    <button type='button'>
                    <img src={image.call} alt="call" className={myModule.circle}></img>
                    </button>
                    <br></br>
                    <button type='button'>
                    <img src={image.whatsapp} alt="whatsapp" className={myModule.circle}></img>
                    </button>
                    <br></br>
                    <button>
                    <img src={image.facebook} alt="facebook" className={myModule.circle}></img>
                    </button>
                    <br></br>
                    <button type='button'>
                    <img src={image.instagram} alt="instagram" className={myModule.circle}></img>
                    </button>
                    <br></br>
                </div>
               
        </header>
    </div>
  )
}

export default header