import React from 'react';
import Header from '../Home/Header/Header';
import FormMainSection from './FormMainSection/FormMainSection';
import FormSection from './FormSection/FormSection';
import Contact from '../Home/Contact/Contact';

export default function Form() {
  return (
    <div className="form">
      <Header />
      <FormMainSection />
      <FormSection />
      <Contact />
    </div>
  );
}
