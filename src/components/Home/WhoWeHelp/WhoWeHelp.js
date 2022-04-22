import React, { useState } from 'react';
import WhoWeHelpList from './WhoWeHelpList';

export default function WhoWeHelp() {
    const [selected, setSelected] = useState('fundations');
    const [classF, setClassF] = useState("who-we-help__buttons__element border");
    const [classO, setClassO] = useState("who-we-help__buttons__element");
    const [classL, setClassL] = useState("who-we-help__buttons__element");    
    const [currentPage, setCurrentPage] = useState(1);
    const list = {
        fundations: [
            {
                title: 'Fundacja "Dbam o Zdrowie"',
                subtitle: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                staff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Fundacja "Dla dzieci"',
                subtitle: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                staff: 'ubrania, meble, zabawki'
            },
            {
                title: 'Fundacja "Bez domu"',
                subtitle: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                staff: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja 4',
                subtitle: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                staff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Fundacja 5',
                subtitle: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                staff: 'ubrania, meble, zabawki'
            },
            {
                title: 'Fundacja 6',
                subtitle: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                staff: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja 7',
                subtitle: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                staff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Fundacja 8',
                subtitle: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                staff: 'ubrania, meble, zabawki'
            },
            {
                title: 'Fundacja 9',
                subtitle: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                staff: 'ubrania, jedzenie, ciepłe koce'
            }
        ],
        organizations: 
        [
            {
                title: 'Organizacja "Dbam o Zdrowie"',
                subtitle: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                staff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Organizacja "Dla dzieci"',
                subtitle: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                staff: 'ubrania, meble, zabawki'
            },
            {
                title: 'Organizacja "Bez domu"',
                subtitle: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                staff: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Organizacja 4',
                subtitle: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                staff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Organizacja 5',
                subtitle: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                staff: 'ubrania, meble, zabawki'
            },
            {
                title: 'Organizacja 6',
                subtitle: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                staff: 'ubrania, jedzenie, ciepłe koce'
            }
        ],
        localCollections: 
        [
            {
                title: 'Lokalna zbiórka "Dbam o Zdrowie"',
                subtitle: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                staff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Lokalna zbiórka "Dla dzieci"',
                subtitle: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                staff: 'ubrania, meble, zabawki'
            },
            {
                title: 'Lokalna zbiórka "Bez domu"',
                subtitle: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                staff: 'ubrania, jedzenie, ciepłe koce'
            }
        ]
    };

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
