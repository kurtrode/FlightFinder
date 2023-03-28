import React from 'react'
import UserContext from './UserContext';
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router';
import axios from 'axios'

export default function Logout() {

    const navigate = useNavigate();

    const { getUserInformation } = useContext(UserContext);

    const logout = async () => {

        const response = await axios.post('/logout', {

            //only with fetch:
            
            // method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-type': 'application/json',
            //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            // }
        })

        if (response.status === 204) {
        getUserInformation();
        }
        navigate('/')
    }

   return (
        <button
            onClick={ logout }
        >
            Logout
        </button>
    )
}
