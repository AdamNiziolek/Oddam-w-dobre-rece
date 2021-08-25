import React from 'react'
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <div className="nav">
            <Link className="nav__link" to="" smooth={true} duration={500}>Start</Link>
            <Link className="nav__link" to="" smooth={true} duration={500}>O co chodzi?</Link>
            <Link className="nav__link" to="" smooth={true} duration={500}>O nas</Link>
            <Link className="nav__link" to="" smooth={true} duration={500}>Fundacja i organizacje</Link>
            <Link className="nav__link" to="" smooth={true} duration={500}>Kontakt</Link>
        </div>
    )
}
