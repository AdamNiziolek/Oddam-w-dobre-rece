import React, { useState } from 'react'
import { Link } from "react-router-dom"
import HomeHeader from './HomeHeader'

export default function Login() {
    const [form, setForm] = useState({ email:"", password:""});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailInputClass, setEmailInputClass] = useState("");
    const [emailErrorClass, setEmailErrorClass] = useState("form-error-alert form-no-error");
    const [passwordInputClass, setPasswordInputClass] = useState("");
    const [passwordErrorClass, setPasswordErrorClass] = useState("form-error-alert form-no-error");
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => ({
                ...prevState,
                [name]: value
            }));
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validatePassword = (password) => {
        return String(password).length>=6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateEmail(form.email)) {
            setEmailError(false);
        } else {
            if (emailError !== true) setEmailError(true);
        } 

        if (validatePassword(form.password)) {
            setPasswordError(false);
            if (emailError !== true) {
                setForm({ email:"", password:"" });
            }            
        } else {
            if (passwordError !== true) setPasswordError(true);
        }
    } 

    if (emailError === true && emailInputClass !== "border-error") {
        setEmailInputClass("border-error");
        setEmailErrorClass("form-error-alert");
    } else if (emailError !== true && emailInputClass === "border-error"){
        setEmailInputClass("");
        setEmailErrorClass("form-error-alert form-no-error");
    }
    if (passwordError === true && passwordInputClass !== "border-error") {
        setPasswordInputClass("border-error");
        setPasswordErrorClass("form-error-alert");
    } else if (passwordError !== true && passwordInputClass === "border-error"){
        setPasswordInputClass("");
        setPasswordErrorClass("form-error-alert form-no-error");
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
                            <input type="email" name="email" class={emailInputClass}
                                value={form.email} onChange={handleChange}
                            />         
                            <div className={emailErrorClass}>Podany email jest nieprawidłowy!</div>                   
                        </label>
                    </div>
                    <div className="login__content__form__data">
                        <label>Hasło
                            <input type="password" name="password" class={passwordInputClass}
                                value={form.password} onChange={handleChange}
                            />  
                            <div className={passwordErrorClass}>Podane hasło jest za krótkie!</div>                          
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