import React from 'react';
import { elements } from './list.json';

export default function FormMainSection() {
  return (
    <div className="form-main-section">
      <div className="form-main-section__img"></div>
      <div className="form-main-section__content">
        <h1>
          Oddaj rzeczy, których już nie chcesz <br />
          POTRZEBUJĄCYM
        </h1>
        <div className="decoration"></div>
        <h2>Wystarczą 4 proste kroki:</h2>
        <div className="form-main-section__content__steps">
          {elements.map(({ number, text }, idx) => (
            <div
              key={idx}
              className="form-main-section__content__steps__element">
              <h3>{number}</h3>
              <p>{text}</p>
              <div className="form-main-section__content__steps__element__border"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
