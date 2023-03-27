import React from 'react'
import { Link } from "react-router-dom";
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
                             
                <div class="animation start-home"></div>
                

            </div>




            <div>
                 {/* <Link to="/register" > Register </Link>             
                 <Link to="/login" > Login </Link>         */}
                  {/* should be displayed if user is not loged  */}

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
                                          ? <Link to="/logout"> Logout </Link>
                                          : ''
                  }
           
            </div>

    </nav>





   
    


    </>
  )
}
