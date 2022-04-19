import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeMainSection() {
    return (
        <div className="home__main-section">
            <div className="home__main-section__img"></div>
            <div className="home__main-section__content">
                <h1>Zacznij pomagać! <br/> 
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <div className="decoration"></div>
                <div className="home__main-section__content__buttons">
                    <Link to="/oddaj-rzeczy" 
                        className="home__main-section__content__buttons__link">
                        Oddaj <br/> rzeczy
                    </Link>
                    <Link to="/oddaj-rzeczy" 
                        className="home__main-section__content__buttons__link">
                        Zorganizuj <br/> zbiórkę
                    </Link>
                </div>          
            </div>
        </div>
    )
}
