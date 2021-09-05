import React from 'react'
import HomeHeader from './HomeHeader'
import HomeMainSection from './HomeMainSection'
import HomeThreeColumns from './HomeThreeColumns'
import HomeEasySteps from './HomeEasySteps'
import HomeAboutUs from './HomeAboutUs'
import HomeWhoWeHelp from './HomeWhoWeHelp'

export default function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeMainSection/>
            <HomeThreeColumns/>
            <HomeEasySteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
        </div>
    )
}
