import React, { useState } from 'react';
import classNames from 'classnames'
import WhoWeHelpList from './WhoWeHelpList';
import whoWeHelpList from '../../../config/whoWeHelpList.json';

export default function WhoWeHelp() {
    const [selected, setSelected] = useState('fundations');
    const [currentPage, setCurrentPage] = useState(1);
    const list = whoWeHelpList;

    function getClassName(selectedItem) {
        return classNames({
            "who-we-help__buttons__element": true,
            "border": selected === selectedItem
        });
    }
    const classF = getClassName('fundations');
    const classO = getClassName('organizations');
    const classL = getClassName('localCollections');

    return (
        <div className="who-we-help" id="who-we-help">
            <h2>Komu pomagamy?</h2>
            <div className="decoration"></div>
            <div className="who-we-help__buttons">
                <div className={classF}
                    id="fundations"
                    onClick={(event) => {
                        setSelected(event.target.id);
                        setCurrentPage(1);
                    }}>
                    Fundacjom
                </div>
                <div className={classO}
                    id="organizations"
                    onClick={(event) => {
                        setSelected(event.target.id);
                        setCurrentPage(1);
                    }}>
                    Organizacjom pozarządowym
                </div>
                <div className={classL}
                    id="localCollections"
                    onClick={(event) => {
                        setSelected(event.target.id);
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
