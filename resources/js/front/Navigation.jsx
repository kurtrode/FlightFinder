import React from 'react'
import { Link } from "react-router-dom";

import Logout from './Logout'

import './Navigation.css'

import NearbyCities from './NearbyCities';



export default function Navigation({user}) {

  console.log(user)

  return (
    <>

    <nav className="navigation-bar">
            
            <div className="a">

                <Link className="a" to="/" > Home</Link>
                <Link className="a" to="/maps" > MAP/S</Link>
                <Link className="a" to="/destinations" > Destinations</Link>      
                <Link className="a" to="/flight" > Flight</Link>           
    
            </div>
            <NearbyCities/>


            <div>
        
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
