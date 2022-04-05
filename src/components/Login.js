import React, { useState } from 'react'
import { Link } from "react-router-dom"
import HomeHeader from './HomeHeader'

export default function Login() {
    const [form, setForm] = useState({ email:"", password:""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => ({
                ...prevState,
                [name]: value
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();       
    }

    return (
        <div className="login">
            <HomeHeader/>
            <div className='login__content'>
                <h1>Zaloguj się</h1> 
                <div className="decoration"/>
                <form className="login__content__form" onSubmit={handleSubmit}>
                    <div className="login__content__form__data">
                        <label>Email
                            <input type="email" name="email"
                                value={form.email} onChange={handleChange}
                            />                            
                        </label>
                    </div>
                    <div className="login__content__form__data">
                        <label>Hasło
                            <input type="password" name="password"
                                value={form.password} onChange={handleChange}
                            />                            
                        </label>
                    </div>
                    <div className="login__content__form__buttons">
                        <Link to="/rejestracja" className="login__content__form__buttons__element">
                            Załóż konto
                        </Link>
                        <div className="login__content__form__buttons__element"
                            onClick={handleSubmit}>
                            Zaloguj się
                        </div>
                    </div>                    
                </form>
            </div>
            

        </div>
    )
}