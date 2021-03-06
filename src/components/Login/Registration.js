import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  getInputClassNames,
  getErrorClassNames,
} from '../../utils/getClassNames';
import Header from '../Home/Header/Header';
import { validatePassword, validateEmail, resetPasswords } from './utils';

export default function Registration() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const emailInputClass = getInputClassNames(emailError);
  const emailErrorClass = getErrorClassNames(emailError);
  const passwordInputClass = getInputClassNames(passwordError);
  const passwordErrorClass = getErrorClassNames(passwordError);
  const password2InputClass = getInputClassNames(password2Error);
  const password2ErrorClass = getErrorClassNames(password2Error);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!validateEmail(form.email)) {
      if (!emailError) setEmailError(true);
      resetPasswords(setForm);
      return;
    }
    if (emailError) setEmailError(false);

    if (!validatePassword(form.password)) {
      if (!passwordError) setPasswordError(true);
      resetPasswords(setForm);
      return;
    }
    if (passwordError) setPasswordError(false);

    if (form.password2 !== form.password) {
      if (!password2Error) setPassword2Error(true);
      resetPasswords(setForm);
      return;
    }
    if (password2Error) setPassword2Error(false);

    try {
      setLoading(true);
      await signup(form.email, form.password);
      setLoading(false);
      history.push('/');
    } catch {
      setError('Rejestracja nieudana!');
      resetPasswords(setForm);
    }
  }

  return (
    <div className="login">
      <Header />
      <div className="login__content">
        <h1>Zarejestruj si??</h1>
        <div className="decoration" />
        <form className="login__content__form" onSubmit={handleSubmit}>
          <div className="login__content__form__data">
            <label>
              Email
              <input
                type="email"
                name="email"
                className={emailInputClass}
                value={form.email}
                onChange={handleChange}
              />
              <div className={emailErrorClass}>
                Podany email jest nieprawid??owy!
              </div>
            </label>
          </div>
          <div className="login__content__form__data">
            <label>
              Has??o
              <input
                type="password"
                name="password"
                className={passwordInputClass}
                value={form.password}
                onChange={handleChange}
              />
              <div className={passwordErrorClass}>
                Podane has??o jest za kr??tkie!
              </div>
            </label>
          </div>
          <div className="login__content__form__data">
            <label>
              Powt??rz has??o
              <input
                type="password"
                name="password2"
                className={password2InputClass}
                value={form.password2}
                onChange={handleChange}
              />
              {!error && (
                <div className={password2ErrorClass}>
                  Podane has??a musz?? by?? takie same!
                </div>
              )}
              {error && <div className="form-error-alert">{error}</div>}
            </label>
          </div>
          <div className="login__content__form__buttons">
            <Link
              to="/logowanie"
              className="login__content__form__buttons__element">
              Zaloguj si??
            </Link>
            <div
              className="login__content__form__buttons__element"
              onClick={handleSubmit}
              disabled={loading}>
              Za?????? konto
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
