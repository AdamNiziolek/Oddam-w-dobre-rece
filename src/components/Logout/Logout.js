import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header/Header';

export default function Logout() {
  return (
    <div className="logout">
      <Header />
      <div className="logout__content">
        <h1>
          Wylogowanie nastąpiło <br /> pomyślnie!
        </h1>
        <div className="decoration" />
        <Link to="/" className="logout__content__button">
          Strona główna
        </Link>
      </div>
    </div>
  );
}
