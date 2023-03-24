import React, { useState, useEffect, useContext } from 'react'
import UserContext from './UserContext';
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Login(props) {

    const { getUserInformation } = useContext(UserContext);

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const formHandleSubmit = async (event) => {

        event.preventDefault()

        // const response = await fetch('/login', {
        //     method: 'POST',
        //     body: JSON.stringify(values),
        //     headers: {
        //         'Content-type': 'application/json',
        //         'Accept': 'application/json',
        //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        //     }
        // });

        // const response_data = await response.json();

        const response = await axios.post('/login',values)

         if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response.data);
                    break;
            }
        };

        getUserInformation();

    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
     <div className="form-container" >

        <h2>Login</h2>

         <form onSubmit={ formHandleSubmit } className="log-form" method="post">


            <label className="label" htmlFor="email">Email</label>
            <input 
                className="reg-form__input"
                type="email" 
                id="email" 
                name="email" 
                value={ values.email } 
                onChange={ handleChange }
            />

            <label className="label" htmlFor="password">Password</label>
            <input 
                className="reg-form__input"
                type="password" 
                id="password" 
                name="password" 
                value={ values.password } 
                onChange={ handleChange }
            />

            <button className="button" >Log In</button>

       <Link to="/register"> <button className="button switch">Don't have an accout? Register here </button></Link>
        </form>
        

    </div>
  )
}
