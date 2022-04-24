import React from 'react';
import { Link } from 'react-router-dom';
import EasyStepsElement from './EasyStepsElement';
import { steps } from './stepsList.json';

export default function EasySteps() {
  return (
    <div className="easy-steps" id="easy-steps">
      <h2>Wystarczą 4 proste kroki</h2>
      <div className="decoration"></div>
      <div className="easy-steps__four-columns">
        {steps.map((step) => {
          const { icon, key, title, text } = step;
          return (
            <EasyStepsElement icon={icon} key={key} title={title} text={text} />
          );
        })}
      </div>
      <div className="easy-steps__button-section">
        <Link to="/oddaj-rzeczy" className="easy-steps__button-section__link">
          Oddaj <br /> rzeczy
        </Link>
      </div>
    </div>
  );
}
