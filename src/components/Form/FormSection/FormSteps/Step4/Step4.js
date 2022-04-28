import React from 'react';

export default function Step4({ setStep, addressForm, setAddressForm }) {
  const { street, city, postCode, phone, date, hour, comments } = addressForm;

  const reduceStep = () => {
    setStep(3);
  };

  const inscreaseStep = () => {
    if (street.length < 2) return;
    if (city.length < 2) return;
    if (!postCode.match(/^([0-9]{2})(-[0-9]{3})?$/i)) return;
    if (phone.length !== 9) return;
    if (date.length < 2) return;
    if (hour.length < 2) return;
    setStep(5);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-step">
      <p className="form-step__step">Krok 4/4</p>
      <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
      <form className="form4">
        <div className="address-section">
          <h3>Adres odbioru:</h3>
          <label>
            Ulica
            <input
              type="text"
              name="street"
              value={street}
              onChange={handleChange}
            />
          </label>
          <label>
            Miasto
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </label>
          <label>
            Kod pocztowy
            <input
              type="text"
              name="postCode"
              value={postCode}
              onChange={handleChange}
            />
          </label>
          <label>
            Numer telefonu
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="date-section">
          <h3>Termin odbioru:</h3>
          <label>
            Data
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </label>
          <label>
            Godzina
            <input
              type="time"
              name="hour"
              value={hour}
              onChange={handleChange}
            />
          </label>
          <label>
            Uwagi <br /> dla kuriera
            <textarea
              name="comments"
              value={comments}
              onChange={handleChange}
            />
          </label>
        </div>
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
