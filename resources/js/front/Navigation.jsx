import React from 'react'
import { Link } from "react-router-dom";

import Logout from './Logout'

import './Navigation.css'

import NearbyCities from './NearbyCities';
import './Navigation.css';



export default function Navigation({user}) {

  console.log(user)

  return (
    <>

    <nav className="navigation-bar">
            
            <div className="a">

                <Link className="a" to="/" > Home</Link>
                <Link className="a" to="/weather" >Weather</Link>
                <Link className="a" to="/destinations" > Flight Map</Link>      
                <Link className="a" to="/flight" > Flight</Link>  
                <Link className="a" to="/about-us">About Us</Link>         
    
            </div>
            <NearbyCities/>


            <div className="b">
        
                  {
                    user === false
                  ? (
                <>

                <Link className="a" to="/register">Registration</Link>
                <Link className="a" to="/login">Login</Link>
                                
                </>
                 )
                 : ''
                }

                {
                user
                ? < Logout />
                : ''
                }
           
            </div>

    </nav>
    </>
  )
}
