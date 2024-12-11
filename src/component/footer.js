import React from 'react'
import image from "../component/image";
const footer = () => {
  return (
    <div>
         <footer class="container">
              <div class="row" style={{border:"1px solid skyblue", borderRadius:"15px",backgroundColor:"#090440"}}>
                <div class="col-lg-6">
                    <br></br>
                    <h3 style={{color:"white"}}>Download Our App</h3>
                    <br></br>
                    <button type="button" className='btn btn-info' style={{height:"65px",width:"150px"}}><image.ShopIcon></image.ShopIcon>Get It On Playstore</button><br></br>
                    <br></br>
                    <button type="button" className='btn btn-info' style={{height:"65px",width:"150px"}}><image.AppleIcon></image.AppleIcon>Get It On App Store</button>
                    <br></br>
                    <br></br>
                </div>
                <div class="col-lg-6">
                    <br></br>
                    <h3 style={{color:"white"}}>Contact Us</h3>
                    <br></br>
                    <h5 style={{color:"white"}}><image.LocationOnIcon></image.LocationOnIcon> No.53, Icon Savithri Ganesh Building, Habibullah Road, T. Nagar, Chennai – 17.</h5>
                    <br></br>
                    <h5 style={{color:"white"}}><image.EmailIcon></image.EmailIcon>srmjewellery@gmail.com</h5>
                    <br></br>
                    <h5 style={{color:"white"}}><image.PhoneIcon></image.PhoneIcon>+91-8098113064</h5>
                </div>
              </div>
        </footer>
    </div>
  )
}

export default footer