import React from 'react';

export default function Step2({ setStep, bags, setBags }) {
  const reduceStep = () => {
    setStep(1);
  };

  const inscreaseStep = () => {
    if (bags === '--wybierz--') return;
    setStep(3);
  };

  const handleChange = (event) => {
    setBags(event.target.value);
  };

  return (
    <div className="form-step">
      <p className="form-step__step">Krok 2/4</p>
      <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
      <form className="form2">
        <label>
          Liczba 60l worków:
          <div className="custom-select">
            <select value={bags} onChange={handleChange}>
              {[0, 1, 2, 3, 4, 5].map((amount) => {
                if (!amount) {
                  return (
                    <option key={amount} value={amount} className="hidden">
                      — wybierz —
                    </option>
                  );
                }
                return (
                  <option key={amount} value={amount}>
                    {amount}
                  </option>
                );
              })}
            </select>
            <div className="custom-arrow"></div>
          </div>
        </label>
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
