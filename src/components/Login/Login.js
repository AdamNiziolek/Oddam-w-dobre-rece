import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { getInputClassNames, getErrorClassNames } from '../../utils/getClassNames';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Home/Header/Header';
import { validatePassword, validateEmail, resetPassword} from './utils';

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

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        if (!validateEmail(form.email)) {
            if (!emailError) setEmailError(true);
            resetPassword(setForm);
            return;
        } else {
            if (emailError) setEmailError(false);
        } 

        if (!validatePassword(form.password)) {
            if (!passwordError) setPasswordError(true);
            return; 
        } else {
            if (passwordError) setPasswordError(false);
        }
    
        try {                          
            setLoading(true);
            await login(form.email, form.password);
            setLoading(false);             
            history.push("/");
        } catch {
            setError('Hasło nieprawidłowe!');
            resetPassword(setForm);
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
                            { !error && <div className={passwordErrorClass}>Podane hasło jest za krótkie!</div> }        
                            { error && <div className="form-error-alert">{error}</div> }                  
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
