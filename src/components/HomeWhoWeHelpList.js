import React, { useState } from 'react'

export default function HomeWhoWeHelpList({data, selected, currentPage, setCurrentPage}) {
    const linesPerPage = 3;

    let paragraph; 
    if (selected === 'fundations') {
        paragraph = 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.';
    } else if (selected === 'organizations') {
        paragraph = 'W naszej bazie znajdziesz listę zweryfikowanych Organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.';      
    } else {
        paragraph = 'W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.';        
    }
    
    const indexOfLastLine = currentPage * linesPerPage; //6
    const indexOfFirstLine = indexOfLastLine - linesPerPage; //3
    const currentLine = data.slice(indexOfFirstLine, indexOfLastLine);

    const renderLines = currentLine.map((data, index) => {
        let {title, subtitle, staff} = data;
        return (
            <div className="who-we-help__content__line" key={index}>
                <div className="who-we-help__content__line__name">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>
                <div className="who-we-help__content__line__stuff">{staff}</div>
            </div>
        );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / linesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (e) => {
        setCurrentPage(e.target.id);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        let className;
        if(number == currentPage) {
            className = "who-we-help__content__page__number border";
        } else {
            className = "who-we-help__content__page__number";
        }

        if (pageNumbers.length > 1) {
            return (
                <div
                    className={className}
                    key={number}
                    id={number}
                    onClick={handleClick}
                >
                    {number}
                </div>
            );
        } else {
            return (
                <div
                    className={className}
                    style={{outline: '0px', height: '50px', cursor: 'default'}}
                />
            )
        }        
    });

    return (
        <div className="who-we-help__content">
            <p className="who-we-help__content__paragraph">{paragraph}</p>
            {renderLines}
            <div className="who-we-help__content__page">
                {renderPageNumbers}
            </div>
        </div>
    )
}