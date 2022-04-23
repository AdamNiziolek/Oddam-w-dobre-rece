import React from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import ThreeColumns from '../ThreeColumns/ThreeColumns';
import EasySteps from '../EasySteps/EasySteps';
import AboutUs from '../AboutUs/AboutUs';
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp';
import Contact from '../Contact/Contact';

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <MainSection/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
        </div>
    )
}
