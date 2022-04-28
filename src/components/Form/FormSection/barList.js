import React from 'react';
import pdf from '../../../assets/Instrukcja.pdf';

export const getLink = () => (
  <a className="link" href={pdf} target="_blank" rel="noreferrer">
    TUTAJ.
  </a>
);

const barText = [
  'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać',
  'Wszystkie rzeczy zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz ',
  'Jeżeli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
  'Podaj adres oraz termin odbioru rzeczy.',
];

export default barText;
