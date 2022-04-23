import React, { useState } from 'react';
import classNames from 'classnames';
import WhoWeHelpList from './WhoWeHelpList';
import whoWeHelpList from '../../../config/whoWeHelpList.json';
import { POSSIBLE_TYPES_OF_HELP } from './config';

export default function WhoWeHelp() {
    const [selected, setSelected] = useState('fundations');
    const [currentPage, setCurrentPage] = useState(1);
    const list = whoWeHelpList;
    const { FUNDATIONS, ORGANIZATIONS, LOCAL_COLLECTIONS } = POSSIBLE_TYPES_OF_HELP;
 
    function getClassName(selectedItem) {
        return classNames({
            "who-we-help__buttons__element": true,
            "border": selected === selectedItem
        });
    }
    const classF = getClassName(FUNDATIONS);
    const classO = getClassName(ORGANIZATIONS);
    const classL = getClassName(LOCAL_COLLECTIONS);

    const divList = [{
        id: FUNDATIONS,
        text: "Fundacjom",
        className: classF
    }, {
        id: ORGANIZATIONS,
        text: "Organizacjom pozarządowym",
        className: classO
    }, {
        id: LOCAL_COLLECTIONS,
        text: "Lokalnym zbiórkom",
        className: classL
    }];

    return (
        <div className="who-we-help" id="who-we-help">
            <h2>Komu pomagamy?</h2>
            <div className="decoration"></div>
            <div className="who-we-help__buttons">
                {divList.map((element, idx) => {
                    const { id, text, className } = element;
                    return <div className={className}
                        key={idx}
                        id={id}
                        onClick={(event) => {
                            setSelected(event.target.id);
                            setCurrentPage(1);
                        }}>
                        {text}
                    </div>
                })}
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
