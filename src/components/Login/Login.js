import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { getInputClassNames, getErrorClassNames } from '../../utils/getClassNames'
import { useAuth } from '../../contexts/AuthContext'
import Header from '../Home/Header/Header'

export default function Login() {
    const [form, setForm] = useState({ email:"", password:""});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const emailInputClass = getInputClassNames(emailError);
    const emailErrorClass = getErrorClassNames(emailError);
    const passwordInputClass = getInputClassNames(passwordError);
    const passwordErrorClass = getErrorClassNames(passwordError);
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const handleChange = (event) => {
        const {name, value} = event.target;
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

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (validateEmail(form.email)) {
            setEmailError(false);
        } else {
            if (!emailError) setEmailError(true);
        } 

        if (validatePassword(form.password)) {
            setPasswordError(false);
            if (!emailError) {
                try{      
                    setError('');              
                    setLoading(true);
                    await login(form.email, form.password);
                    history.push("/");
                    setForm({ email:"", password:"" });
                } catch {
                    setError('Hasło nieprawidłowe!');
                    console.log(error);
                    setForm(prevState => ({
                        ...prevState,
                        password: ''
                    }));
                }
                setLoading(false); 
            }            
        } else {
            setError('');
            if (!passwordError) setPasswordError(true);
        }
    } 

    return (
        <div className="login">
            <Header/>
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
                            {error && <div className="form-error-alert center">{error}</div>}                  
                        </label>
                    </div>
                    <div className="login__content__form__buttons">
                        <Link to="/rejestracja" className="login__content__form__buttons__element">
                            Załóż konto
                        </Link>
                        <div className="login__content__form__buttons__element"
                            onClick={handleSubmit} disabled={loading}>
                            Zaloguj się
                        </div>
                    </div>                    
                </form>
            </div>
        </div>
    )
}
