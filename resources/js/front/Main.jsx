import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Registration from './Registration'
import Login from './Login'
import AboutUs from './AboutUs'
import Homepage from './Homepage'
import Logout from './Logout'

export default function Main({user}) {
  return (
    <Routes>

        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/register" element={ <Registration /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path='/aboutus' element={ <AboutUs />} />
        
   
    </Routes>
  )
}
