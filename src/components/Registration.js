import React, { useState } from 'react'
import { Link } from "react-router-dom"
import HomeHeader from './HomeHeader'

export default function Login() {
    const [form, setForm] = useState({ email:"", password:"", password2:""});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [password2Error, setPassword2Error] = useState(false);
    const [emailInputClass, setEmailInputClass] = useState("");
    const [emailErrorClass, setEmailErrorClass] = useState("form-error-alert form-no-error");
    const [passwordInputClass, setPasswordInputClass] = useState("");
    const [passwordErrorClass, setPasswordErrorClass] = useState("form-error-alert form-no-error");
    const [password2InputClass, setPassword2InputClass] = useState("");
    const [password2ErrorClass, setPassword2ErrorClass] = useState("form-error-alert form-no-error");
    
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
            if (emailError === true) setEmailError(false);
        } else {
            if (emailError !== true) setEmailError(true);
        } 

        if (validatePassword(form.password)) {
            if (passwordError === true) setPasswordError(false);
        } else {
            if (passwordError !== true) setPasswordError(true);
        }

        if (form.password2 === form.password) {
            if (password2Error === true) setPassword2Error(false);
            if (emailError !== true && passwordError !== true) {
                setForm({ email:"", password:"", password2:"" });
            }
        } else {
            if (password2Error !== true) setPassword2Error(true);
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
    if (password2Error === true && password2InputClass !== "border-error") {
        setPassword2InputClass("border-error");
        setPassword2ErrorClass("form-error-alert");
    } else if (password2Error !== true && password2InputClass === "border-error"){
        setPassword2InputClass("");
        setPassword2ErrorClass("form-error-alert form-no-error");
    }

    return (
        <div className="login">
            <HomeHeader/>
            <div className='login__content'>
                <h1>Zarejestruj się</h1> 
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
                    <div className="login__content__form__data">
                        <label>Powtórz hasło
                            <input type="password" name="password2" class={password2InputClass}
                                value={form.password2} onChange={handleChange}
                            />  
                            <div className={password2ErrorClass}>Podane hasła muszą być takie same!</div>                          
                        </label>
                    </div>
                    <div className="login__content__form__buttons">
                        <Link to="/logowanie" className="login__content__form__buttons__element">
                            Zaloguj się
                        </Link>
                        <div className="login__content__form__buttons__element"
                            onClick={handleSubmit}>
                            Załóż konto
                        </div>
                    </div>                    
                </form>
            </div>
        </div>
    )
}