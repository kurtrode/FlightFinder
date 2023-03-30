import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
return (


<div className="footer-distributed">

    <div className="footer-left">

        <h3>FlightFinder</h3>
        {/*
        <p className="footer-links">

            <Link to="/"> Home</Link>
            <Link to="/maps"> MAP/S</Link>
            <Link to="/destinations"> Destinations</Link>
            <Link to="/flight"> Flight</Link>

        </p> */}

        <p className="footer-company-name">Flight Finder © 2023</p>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p>Šostakovičovo náměstí 1515/5 155 00 Praha 5, Czech Republic</p>
        </div>



        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">flightfinder@company.com</a></p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            We are newly established company especialized in tracking of flights of aeroplanes and many more objects
            that fly in the sky.
        </p>

        {/* <div className="footer-icons"> */}
            {/*
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a> */}
            
        {/* <Link to="/github"> </Link>
        <Link to="/linkedin"> </Link>
        <Link to="/about-us"> </Link>
        </div> */}

    </div>

</div>

)
}