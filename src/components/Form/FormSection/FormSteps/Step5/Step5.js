import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../../utils/firebase';
import { useAuth } from '../../../../../contexts/AuthContext';
import { ReactComponent as Icon1 } from '../../../../../assets/icon1.svg';
import { ReactComponent as Icon2 } from '../../../../../assets/icon5.svg';
import { aims } from '../Step3/step3List.json';

export default function Step5({
  setStep,
  things,
  bags,
  localization,
  aim,
  otherLocalization,
  addressForm,
}) {
  const { street, city, postCode, phone, date, hour, comments } = addressForm;
  const { currentUser } = useAuth();

  const bagsWord = () => {
    if (Number(bags) === 1) return ' worek';
    if (Number(bags) === 5) return ' worków';
    return ' worki';
  };

  const aimWord = () => (
    aims.map((element, idx) => {
      if (aim[idx]) return `, ${element}`;
      return '';
    }));

  const divs = [
    {
      text: 'Ulica',
      value: street,
    },
    {
      text: 'Miasto',
      value: city,
    },
    {
      text: 'Kod pocztowy',
      value: postCode,
    },
    {
      text: 'Numer telefonu',
      value: phone,
    },
    {
      text: 'Data',
      value: date,
    },
    {
      text: 'Godzina',
      value: hour,
    },
    {
      text: 'Uwagi dla kuriera',
      value: comments,
    },
  ];

  const getDiv = (indexStart, indexStop) => (
    divs.map((element, idx) => {
      const { text, value } = element;
      if (idx > indexStart - 1 && idx < indexStop + 1) {
        return (
          <div className="paragraphs" key={idx}>
            <p className="text">{text}</p>
            <p className="value">{value}</p>
          </div>
        );
      }
      return '';
    }));

  const uploadData = async () => {
    try {
      await addDoc(collection(db, currentUser.email), {
        things,
        bags,
        aim: aimWord(),
        localization,
        otherLocalization,
        street,
        city,
        postCode,
        phone,
        date,
        hour,
        comments,
      });
      setStep(6);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const reduceStep = () => {
    setStep(4);
  };

  return (
    <div className="form-step">
      <div className="summary">
        <h2>Podsumowanie Twojej darowizny</h2>
        <h3>Oddajesz:</h3>
        <div className="gift">
          <Icon1 className="icon" />
          <p>
            {bags}
            {bagsWord()}, {things}
          </p>
          {aimWord().map((element, idx) => (
            <p key={idx}>{element}</p>
          ))}
        </div>
        <div className="gift">
          <Icon2 className="icon" />
          <p>
            dla lokalizacji: {localization} {otherLocalization}
          </p>
        </div>
        <div className="two-columns">
          <div className="column">
            <h3>Adres odbioru:</h3>
            {getDiv(0, 3)}
          </div>
          <div className="column">
            <h3>Termin odbioru:</h3>
            {getDiv(4, 6)}
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="button" onClick={reduceStep}>
          Wstecz
        </div>
        <div className="button" onClick={uploadData}>
          Potwierdzam
        </div>
      </div>
    </div>
  );
}
