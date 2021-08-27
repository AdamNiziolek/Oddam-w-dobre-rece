import React from 'react'
import HomeHeader from './HomeHeader'
import HomeMainSection from './HomeMainSection'
import HomeThreeColumns from './HomeThreeColumns'
import HomeEasySteps from './HomeEasySteps'
import HomeAboutUs from './HomeAboutUs'

export default function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeMainSection/>
            <HomeThreeColumns/>
            <HomeEasySteps/>
            <HomeAboutUs/>
        </div>
    )
}
