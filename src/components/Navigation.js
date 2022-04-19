import React from 'react'
import { Link } from "react-scroll"

export default function Navigation() {
    return (
        <div className="header__nav">
            <Link className="header__nav__link" to="easy-steps" smooth={true} duration={500}>O co chodzi?</Link>
            <Link className="header__nav__link" to="about-us" smooth={true} duration={500}>O nas</Link>
            <Link className="header__nav__link" to="who-we-help" smooth={true} duration={500}>Fundacja i organizacje</Link>
            <Link className="header__nav__link" to="contact" smooth={true} duration={500}>Kontakt</Link>
        </div>
    )
}
