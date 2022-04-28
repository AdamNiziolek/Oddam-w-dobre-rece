import React from 'react';
import classNames from 'classnames';
import { aims, cities } from './step3List.json';

export default function Step3({
  setStep,
  localization,
  setLocalization,
  aim,
  setAim,
  otherLocalization,
  setOtherLocalization,
}) {
  const reduceStep = () => {
    setStep(2);
  };

  const inscreaseStep = () => {
    if (!aim.includes(true)) return;
    if (localization === '--wybierz--' && !otherLocalization) return;
    setStep(4);
  };

  const handleChange = (event) => {
    setLocalization(event.target.value);
  };

  const handleClick = (event) => {
    const id = Number(event.target.id);
    const newAim = aim.map((element, index) => {
      if (index === id) return !element;
      return element;
    });
    setAim(newAim);
  };

  const checkboxClass = (idx) => {
    const aimId = Number(idx);
    return classNames({
      'custom-checkbox': true,
      'input-checked': aim[aimId] === true,
    });
  };

  const handleTextChange = (event) => {
    setOtherLocalization(event.target.value);
  };

  return (
    <div className="form-step">
      <p className="form-step__step">Krok 3/4</p>
      <h2>Lokalizacja:</h2>
      <form className="form3">
        <div className="custom-select">
          <select value={localization} onChange={handleChange}>
            {cities.map((city, idx) => {
              if (!idx) {
                return (
                  <option key={idx} value={city} className="hidden">
                    — wybierz —
                  </option>
                );
              }
              return (
                <option key={idx} value={city}>
                  {city}
                </option>
              );
            })}
          </select>
          <div className="custom-arrow"></div>
        </div>
        <h3>Komu chcesz pomóc?</h3>
        <div className="checkboxes">
          {aims.map((target, idx) => (
            <div
              className={checkboxClass(idx)}
              key={idx}
              name={target}
              id={idx}
              onClick={handleClick}>
              {target}
            </div>
          ))}
        </div>
        <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
        <input
          className="text-input"
          type="text"
          onChange={handleTextChange}
          value={otherLocalization}
        />
      </form>
      <div className="buttons">
        <div className="button" onClick={reduceStep}>
          Wstecz
        </div>
        <div className="button" onClick={inscreaseStep}>
          Dalej
        </div>
      </div>
    </div>
  );
}
