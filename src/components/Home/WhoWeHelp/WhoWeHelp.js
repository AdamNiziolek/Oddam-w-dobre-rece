import React, { useState } from 'react';
import WhoWeHelpList from './WhoWeHelpList';
import whoWeHelpList from '../../../config/whoWeHelpList.json';

export default function WhoWeHelp() {
    const [selected, setSelected] = useState('fundations');
    const [classF, setClassF] = useState("who-we-help__buttons__element border");
    const [classO, setClassO] = useState("who-we-help__buttons__element");
    const [classL, setClassL] = useState("who-we-help__buttons__element");    
    const [currentPage, setCurrentPage] = useState(1);
    const list = whoWeHelpList;

    if (selected === "fundations" && classF !== "who-we-help__buttons__element border") {
        setClassF("who-we-help__buttons__element border");
        setClassO("who-we-help__buttons__element");
        setClassL("who-we-help__buttons__element");
    } else if (selected === "organizations" && classO !== "who-we-help__buttons__element border") {
        setClassF("who-we-help__buttons__element");
        setClassO("who-we-help__buttons__element border");
        setClassL("who-we-help__buttons__element"); 
    } else if (selected === "localCollections" && classL !== "who-we-help__buttons__element border") {
        setClassF("who-we-help__buttons__element");
        setClassO("who-we-help__buttons__element");
        setClassL("who-we-help__buttons__element border");
    }

    return (
        <div className="who-we-help" id="who-we-help">
            <h2>Komu pomagamy?</h2>
            <div className="decoration"></div>
            <div className="who-we-help__buttons">
                <div className={classF}
                    id="fundations"
                    onClick={(e) => {
                        setSelected(e.target.id);
                        setCurrentPage(1);
                    }}>
                    Fundacjom
                </div>
                <div className={classO}
                    id="organizations"
                    onClick={(e) => {
                        setSelected(e.target.id);
                        setCurrentPage(1);
                    }}>
                    Organizacjom pozarządowym
                </div>
                <div className={classL}
                    id="localCollections"
                    onClick={(e) => {
                        setSelected(e.target.id);
                        setCurrentPage(1);
                    }}>
                    Lokalnym zbiórkom
                </div>
            </div>
            <WhoWeHelpList 
                data={list[selected]} 
                selected={selected} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
