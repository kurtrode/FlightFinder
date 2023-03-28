import React from 'react'
import { Link } from "react-router-dom";
import Logout from './Logout'

export default function Navigation({user}) {

  console.log(user)

  return (
    <>
    <nav>
            
            <div>
                <Link to="/" > Homepage</Link>
                <Link to="/maps" > MAP/S</Link>
                <Link to="/destinations" > Destinations</Link>      {/* if are managed to complete MVC */}
                <Link to="/flights" > Flights</Link>
            </div>

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
