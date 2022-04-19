import React from 'react'
import { Link } from 'react-router-dom'
import HomeEasyStepsElement from './HomeEasyStepsElement'

export default function HomeEasySteps() {
    return (
        <div className="easy-steps" id="easy-steps">
            <h2>Wystarczą 4 proste kroki</h2>
            <div className="decoration"></div>
            <div className="easy-steps__four-columns">
                <HomeEasyStepsElement 
                    icon="1" 
                    key={1}
                    title="Wybierz rzeczy" 
                    text="ubrania, zabawki, sprzęt i inne"
                />
                <HomeEasyStepsElement 
                    icon="2"  
                    key={2}
                    title="Spakuj je" 
                    text="skorzystaj z worków na śmieci"
                />
                <HomeEasyStepsElement 
                    icon="3" 
                    key={3}
                    title="Zdecyduj komu chcesz pomóc" 
                    text="wybierz zaufane miejsce"
                />
                <HomeEasyStepsElement 
                    icon="4" 
                    key={4}
                    title="Zamów kuriera" 
                    text="kurier przyjedzie w dogodnym terminie"
                />
            </div>
            <div className="easy-steps__button-section">
                <Link to="/oddaj-rzeczy" 
                    className="easy-steps__button-section__link">
                    Oddaj <br/> rzeczy
                </Link>
            </div>
        </div>
    )
}
