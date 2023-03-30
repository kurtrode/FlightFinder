import React from 'react'
import { Link } from "react-router-dom";

import Logout from './Logout'
import NearbyCities from './NearbyCities';
import './Navigation.css';


export default function Navigation({user}) {

  console.log(user)

  return (
    <>

    <nav>
            
            <div className='a'>
                <Link to="/" > Home</Link>
                <Link to="/maps" > MAP/S</Link>
                <Link to="/destinations" > Destinations</Link>      
                <Link to="/flight" > Flight</Link>           
                             
                <div className="animation_start-home"></div>
                

            </div>
            <NearbyCities/>


            <div>
        
                  {
                    user === false
                  ? (
                <>

                <Link to="/register">Registration</Link>
                <Link to="/login">Login</Link>
                                
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
