import React, { useState } from 'react'
import contactFetch from '../../../utils/contactFetch'
import classNames from 'classnames'

export default function Contact() {
    const [form, setForm] = useState({ name:"", email:"", message:""});
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [formSend, setFormSend] = useState(false);

    function getInputClassNames(error) {
        return classNames({
            "border-error": error
        });
    }

    function getErrorClassNames(error) {
        return classNames({
            "form-error-alert": true,
            "form-no-error": !error
        });
    }

    const nameInputClass = getInputClassNames(nameError);
    const nameErrorClass = getErrorClassNames(nameError);
    const emailInputClass = getInputClassNames(emailError);
    const emailErrorClass = getErrorClassNames(emailError);
    const messageInputClass = getInputClassNames(messageError);
    const messageErrorClass = getErrorClassNames(messageError);
    const formSendClass = classNames({
        "form-send-alert": true,
        "form-no-send": !formSend
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);       
        contactFetch(form)
        .then(response => response.json())
        .then(status => {
            if (status.status === "success") {                
                setFormSend(true);
                setForm({ name:"", email:"", message:"" });
            } else {
                setFormSend(false);
                status.errors.forEach(element => {
                    if (element.param === "name") {
                        setNameError(true);
                    } else if (element.param === "email") {
                        setEmailError(true);
                    } else if (element.param === "message") {
                        setMessageError(true);
                    }
                });
            }        
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__container__content">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decoration"/>
                    <div className={formSendClass}>Wiadomość została wysłana! {<br/>} Wkrótce się skontaktujemy.</div>
                    <form className="contact__container__content__form" onSubmit={handleSubmit}>
                        <div className="contact__container__content__form__personal-data">
                            <label>Wpisz swoje imię
                                <input type="name" name="name" class={nameInputClass}
                                    value={form.name} onChange={handleChange}
                                />
                                <div className={nameErrorClass}>Podane imię jest nieprawidłowe!</div>
                            </label>
                            <label>Wpisz swój email
                                <input type="email" name="email" class={emailInputClass}
                                    value={form.email} onChange={handleChange}
                                />
                                <div className={emailErrorClass}>Podany email jest nieprawidłowy!</div>
                            </label>
                        </div>
                        
                        <div className="contact__container__content__form__message">
                            <label>Wpisz swoją wiadomość
                                <textarea name="message" class={messageInputClass}
                                    value={form.message} onChange={handleChange} 
                                />
                                <div className={messageErrorClass}>Wiadomość musi mieć conajmniej 120 znaków!</div>
                            </label>
                        </div>
                        <div className="contact__container__content__form__button"
                            onClick={handleSubmit}>
                            Wyślij
                        </div>
                    </form>
                </div>
                <div className="contact__container__footer">
                    <span>Copyright by Coders Lab</span>
                    <div className="contact__container__footer__links">
                        <a href="https://www.facebook.com/CodersLabSzkolaIT/" 
                            target="_blank" rel="noreferrer"
                        > </a>
                        <a href="https://www.instagram.com/coders.lab" 
                            target="_blank" rel="noreferrer"
                        > </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
