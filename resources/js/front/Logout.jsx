import React from 'react'
import UserContext from './UserContext';
import { useContext, useEffect } from "react";
import axios from 'axios'

export default function Logout() {

    const { setUser, getUserInformation } = useContext(UserContext);

    const logout = async () => {

        const response = await axios.post('/logout', {
            // method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-type': 'application/json',
            //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            // }
        })

        if (response.status === 204) {
            // setUser(false);
            getUserInformation();
        }
    }


useEffect(() => {
        getUserInformation();
    }, [])

   return (
        <button
            onClick={ logout }
        >
            Logout
        </button>
    )
}
