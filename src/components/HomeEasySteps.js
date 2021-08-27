import React from 'react'
import { Link } from 'react-router-dom'
import HomeEasyStepsElement from './HomeEasyStepsElement'
import { ReactComponent as Icon1 } from '../assets/icon1.svg'
import { ReactComponent as Icon2 } from '../assets/icon2.svg'
import { ReactComponent as Icon3 } from '../assets/icon3.svg'
import { ReactComponent as Icon4 } from '../assets/icon4.svg'

export default function HomeEasySteps() {
    return (
        <div className="easy-steps" id="easy-steps">
            <h2>Wystarczą 4 proste kroki</h2>
            <div className="decoration"></div>
            <div className="easy-steps__four-columns">
                <HomeEasyStepsElement 
                    Icon={Icon1} 
                    key={1}
                    title="Wybierz rzeczy" 
                    text="ubrania, zabawki, sprzęt i inne"
                />
                <HomeEasyStepsElement 
                    Icon={Icon2} 
                    key={2}
                    title="Spakuj je" 
                    text="skorzystaj z worków na śmieci"
                />
                <HomeEasyStepsElement 
                    Icon={Icon3} 
                    key={3}
                    title="Zdecyduj komu chcesz pomóc" 
                    text="wybierz zaufane miejsce"
                />
                <HomeEasyStepsElement 
                    Icon={Icon4} 
                    key={4}
                    title="Zamów kuriera" 
                    text="kurier przyjedzie w dogodnym terminie"
                />
            </div>
            <div className="easy-steps__button-section">
                <Link to="/logowanie" 
                    className="easy-steps__button-section__link">
                    Oddaj <br/> rzeczy
                </Link>
            </div>
        </div>
    )
}
