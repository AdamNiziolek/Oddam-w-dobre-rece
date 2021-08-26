import React from 'react'
import HomeHeader from './HomeHeader'
import HomeMainSection from './HomeMainSection'
import HomeThreeColumns from './HomeThreeColumns'

export default function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeMainSection/>
            <HomeThreeColumns/>
        </div>
    )
}
