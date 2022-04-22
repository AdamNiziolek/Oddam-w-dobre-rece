import React from 'react'
import { Link } from "react-scroll"
import { useHistory } from "react-router-dom"

export default function Navigation() {
    const history = useHistory();
    const handleChange = () => history.push("/");

    return (
        <div className="header__nav" >
            <Link 
                className="header__nav__link" 
                to="main-section" smooth={true} duration={500} 
                onClick={handleChange}>
                Start
            </Link>
            <Link 
                className="header__nav__link" 
                to="easy-steps" smooth={true} duration={500} 
                onClick={handleChange}>
                O co chodzi?
            </Link>
            <Link 
                className="header__nav__link"
                to="about-us" smooth={true} duration={500} 
                onClick={handleChange}>
                O nas
            </Link>
            <Link 
                className="header__nav__link"
                to="who-we-help" smooth={true} duration={500} 
                onClick={handleChange}>
                Fundacja i organizacje
            </Link>
            <Link 
                className="header__nav__link" 
                to="contact" smooth={true} duration={500}
                onClick={handleChange}>
                Kontakt
            </Link>
        </div>
    )
}
