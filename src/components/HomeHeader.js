import React from 'react'
import { Link } from "react-router-dom";
import Navigation from './Navigation'

export default function Header() {
    return (
        <div className="header">
            <div className="header__login-buttons">
                <Link to="/logowanie" className="header__login-buttons__link header__login-buttons__login">
                    Zaloguj
                </Link>
                <Link to="/rejestracja" className="header__login-buttons__link header__login-buttons__register">
                    Załóż konto
                </Link>
            </div>
            <Navigation/>
        </div>
    )
}
