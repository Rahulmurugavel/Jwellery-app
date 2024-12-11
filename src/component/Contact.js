import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from "./header";
import Footer from './footer';
import image from "../component/image";
import contact from "./Contact.module.css";

const Contact = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        tel: "",
        email: '',
        add: "",
        state: "",
        city: '',
        zipcode: ''
    });
    const changeevent = (event) => {
        const { type, name, value, checked } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }
    const conform = (event) => {
        event.preventDefault();
        if (user.fname.trim() === "") {
            window.alert("FirstName Cannot be empty");
            return false;
        }
        if (!user.fname.trim().match("^[a-zA-Z]{3,25}$")) {
            window.alert("Enter valid FirstName");
            return false;
        }
        if (!user.fname.trim().match("^[a-zA-Z]{1,25}$")) {
            window.alert("Enter valid FirstName");
            return false;
        }
        if (!user.email.trim().match("^[a-z0-9@]{5,25}$")) {
            window.alert("Enter valid Email");
            return false;
        }
        if (user.add.trim() === "") {
            window.alert("Address Cannot be empty");
            return false;
        }
        if (!user.zipcode.match("^[0-9]{6}$")) {
            window.alert("Enter valid zipcode");
            return false;
        }
    }
    return (
        <div>
            <Header></Header>
            <div className={contact.space}></div>
            <nav class="container">
                <img src={image.hr}></img>
                <h2 className={contact.text}>Reach Us</h2>
                <h2 className={contact.text}>For The Elegance</h2>
                <div class="row">
                    <div class="col-lg-6">
                        <br></br>
                        <form onSubmit={conform}>
                            <div class="form-group">
                                <label for="FName">Enter First Name</label>
                                <input type="text" class="form-control" id="FName" name="fname" placeholder="Enter fname" value={user.fname} onChange={changeevent}></input>
                                <br></br>
                                <label for="LName">Enter Last Name</label>
                                <input type="text" class="form-control" id="LName" name="lname" placeholder="Enter lname" value={user.lname} onChange={changeevent}></input>
                                <br></br>
                                <label for="Tel">Enter Telephone</label>
                                <input type="tel" class="form-control" id="Tel" placeholder="telephone" name="tel" value={user.tel} onChange={changeevent}></input>
                                <br></br>
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" value={user.email} onChange={changeevent}></input>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                <br></br>
                                <br></br>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" name="add" id="inputAddress" placeholder="1234 Main St" value={user.add} onChange={changeevent}></input>
                                </div>
                                <br></br>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" name="city" id="inputCity" value={user.city} onChange={changeevent}></input>
                                    </div>
                                    <br></br>
                                    <div class="form-group">
                                        <label for="inputState">State</label>
                                        <input type="text" id="inputState" name="state" class="form-control" value={user.state} onChange={changeevent}></input>
                                    </div>
                                    <br></br>
                                    <div class="form-group">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" class="form-control" name="zipcode" id="inputZip" value={user.zipcode} onChange={changeevent}></input>
                                    </div>
                                </div>
                                <br></br>
                                <button type="submit" class="btn btn-primary" style={{ display: "block", margin: "auto" }}>Submit</button>
                            </div>
                        </form>
                        <br></br>
                    </div>
                    <div class="col-lg-6">
                        <br></br>
                        <br></br>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2556350553978!2d80.21724077483877!3d12.826750687475485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1733765128293!5m2!1sen!2sin"
                            width="600"
                            height="700"
                            style={{ border: 0 }}  // Correct syntax for style
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </nav>
            <Footer></Footer>
        </div>
    )
}

export default Contact