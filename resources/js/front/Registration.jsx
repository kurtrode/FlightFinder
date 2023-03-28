import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from "./UserContext"
import { useNavigate } from 'react-router';

export default function Registration(props) {

    const navigate = useNavigate();

    const { getUserInformation } = useContext(UserContext);

    const [values, setValues] = useState({
        first_name: '',
        email: '',
        last_name: '',
        password: '',
        password_confirmation: ''
    })

    const formHandleSubmit = async (event) => {

        event.preventDefault();

        // make the AJAX request
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        // parse the response as JSON
        const response_data = await response.json();

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }

        getUserInformation();

        navigate('/')

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

        <h2>Register</h2>

        <form action="/register" onSubmit={ formHandleSubmit } className="reg-form" method="post">

            <label className="label" htmlFor="name">First Name:</label>
            <input 
                className="reg-form__input" 
                type="text" 
                id="name" 
                name="first_name" 
                value={ values.first_name }
                onChange={ handleChange }
            />

            <label className="label" htmlFor="lastName">Last Name:</label>
            <input 
                className="reg-form__input" 
                type="text" 
                id="lastName" 
                name="last_name" 
                value={ values.last_name } 
                onChange={ handleChange }
            />

            <label className="label" htmlFor="email">Email:</label>
            <input 
                className="reg-form__input" 
                type="email" 
                id="email" 
                name="email" 
                value={values.email} 
                onChange={ handleChange }
            />

            <label className="label" htmlFor="password">Password:</label>
            <input 
                className="reg-form__input" 
                type="password" 
                id="password" 
                name="password" 
                value={values.password}
                onChange={ handleChange }
            />

            <input 
                className="reg-form__input" 
                type="password" 
                name="password_confirmation"
                placeholder="Confirm password"
                value={ values.password_confirmation } 
                onChange={ handleChange }
            />

            <button className="button" type="submit">Register </button>
        </form>

        <Link to="/login"> <button className="button switch">Have an account? Login here</button> </Link>


    </div>
  )
}
