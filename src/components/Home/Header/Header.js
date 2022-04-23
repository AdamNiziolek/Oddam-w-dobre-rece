import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Navigation from './Navigation';
import { useAuth } from '../../../contexts/AuthContext';

export default function Header() {
    const { currentUser } = useAuth();
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout(event) {
        event.preventDefault();
        try {
            await logout();
            history.push('/wylogowano');
        } catch (err) {
            console.log(err);
        }        
    }

    return (
        <div className="header">            
            <div className="header__login-buttons">
                { currentUser && <>
                    <div className="header__login-buttons__greeting">Cześć {currentUser.email}!</div>
                    <Link to="/oddaj-rzeczy" className="header__login-buttons__link header__login-buttons__login">
                        Oddaj rzeczy
                    </Link>
                    <Link to="/wylogowano" onClick={handleLogout}
                        className="header__login-buttons__link header__login-buttons__login">
                        Wyloguj
                    </Link>
                </> }
                { !currentUser && <>
                    <Link to="/logowanie" className="header__login-buttons__link header__login-buttons__login">
                        Zaloguj
                    </Link>
                    <Link to="/rejestracja" className="header__login-buttons__link header__login-buttons__register">
                        Załóż konto
                    </Link>
                </> }
            </div>
            <Navigation/>
        </div>
    )
}
