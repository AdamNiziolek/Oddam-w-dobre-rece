import React, { useState } from 'react';
import barList, { getLink } from './barList';
import Step1 from './FormSteps/Step1/Step1';
import Step2 from './FormSteps/Step2/Step2';
import Step3 from './FormSteps/Step3/Step3';
import Step4 from './FormSteps/Step4/Step4';
import Step5 from './FormSteps/Step5/Step5';
import Step6 from './FormSteps/Step6/Step6';

export default function FormSection() {
  const [step, setStep] = useState(1);
  const [things, setThings] = useState('');
  const [bags, setBags] = useState('--wybierz--');
  const [localization, setLocalization] = useState('--wybierz--');
  const [aim, setAim] = useState([false, false, false, false, false]);
  const [otherLocalization, setOtherLocalization] = useState('');
  const [addressForm, setAddressForm] = useState({
    street: '',
    city: '',
    postCode: '',
    phone: '',
    date: '',
    hour: '',
    comments: '',
  });

  return (
    <div className="form-section">
      {step < 5 && (
        <div className="form-section__bar">
          <h2>Ważne!</h2>
          <p>
            {barList[step - 1]}
            {step === 2 && getLink()}
          </p>
        </div>
      )}
      <div className="form-section__form">
        {step === 1 && (
          <Step1 setStep={setStep} things={things} setThings={setThings} />
        )}
        {step === 2 && (
          <Step2 setStep={setStep} bags={bags} setBags={setBags} />
        )}
        {step === 3 && (
          <Step3
            setStep={setStep}
            localization={localization}
            setLocalization={setLocalization}
            aim={aim}
            setAim={setAim}
            otherLocalization={otherLocalization}
            setOtherLocalization={setOtherLocalization}
          />
        )}
        {step === 4 && (
          <Step4
            setStep={setStep}
            addressForm={addressForm}
            setAddressForm={setAddressForm}
          />
        )}
        {step === 5 && (
          <Step5
            setStep={setStep}
            things={things}
            bags={bags}
            localization={localization}
            aim={aim}
            otherLocalization={otherLocalization}
            addressForm={addressForm}
          />
        )}
        {step === 6 && <Step6 />}
      </div>
    </div>
  );
}
