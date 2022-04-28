import React from 'react';
import { options } from './step1Options.json';

export default function Step1({ setStep, things, setThings }) {
  const handleClick = () => {
    if (things === '') return;
    setStep(2);
  };

  const handleChange = (event) => {
    setThings(event.target.value);
  };

  return (
    <div className="form-step">
      <p className="form-step__step">Krok 1/4</p>
      <h2>Zaznacz co chcesz oddać:</h2>
      <form className="form1">
        {options.map((option, idx) => (
          <label key={idx}>
            <input
              type="radio"
              value={option}
              checked={things === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </form>
      <div className="button" onClick={handleClick}>
        Dalej
      </div>
    </div>
  );
}
