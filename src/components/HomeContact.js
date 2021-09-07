import React, { useState } from 'react'
const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

export default function HomeContact() {
    const [form, setForm] = useState({ name:"", email:"", message:""});
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [formSend, setFormSend] = useState(false);
    const [formSendClass, setFormSendClass] = useState("form-send-alert form-no-send");
    const [nameInputClass, setNameInputClass] = useState("");
    const [nameErrorClass, setNameErrorClass] = useState("form-error-alert form-no-error");
    const [emailInputClass, setEmailInputClass] = useState("");
    const [emailErrorClass, setEmailErrorClass] = useState("form-error-alert form-no-error");
    const [messageInputClass, setMessageInputClass] = useState("");
    const [messageErrorClass, setMessageErrorClass] = useState("form-error-alert form-no-error");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => ({
                ...prevState,
                [name]: value
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();       
        fetch(`${API}`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then(response => response.json())
        .then(status => {
            console.log(status, messageError);
            if (status.status === "success") {
                setNameError(false);
                setEmailError(false);
                setMessageError(false);
                setFormSend(true);
                setForm({ name:"", email:"", message:"" });
            } else {
                setFormSend(false);
                status.errors.forEach(element => {
                    if (element.param === "name" && nameError !== true) {
                        setNameError(true);
                    } else if (element.param === "email" && emailError !== true) {
                        setEmailError(true);
                    } else if (element.param === "message" && messageError !== true) {
                        setMessageError(true);
                    }
                });
                let i = 0, j = 0, k = 0;
                status.errors.forEach(element => {
                    if (element.param === "name") {
                        i = 1;                        
                    } else if (element.param === "email") {
                        j = 1;                        
                    } else if (element.param === "message") {
                        k = 1;                        
                    }      
                })
                if (i === 0) {
                    setNameError(false);
                } 
                if (j === 0) {
                    setEmailError(false);
                }
                if (k === 0) {
                    setMessageError(false);
                }
            }        
        })
        .catch(error => {
            console.log(error);
        });
    };

    if (nameError === true && nameInputClass !== "border-error") {
        setNameInputClass("border-error");
        setNameErrorClass("form-error-alert");
    } else if (nameError !== true && nameInputClass === "border-error"){
        setNameInputClass("");
        setNameErrorClass("form-error-alert form-no-error");
    }
    if (emailError === true && emailInputClass !== "border-error") {
        setEmailInputClass("border-error");
        setEmailErrorClass("form-error-alert");
    } else if (emailError !== true && emailInputClass === "border-error"){
        setEmailInputClass("");
        setEmailErrorClass("form-error-alert form-no-error");
    }
    if (messageError === true && messageInputClass !== "border-error") {
        setMessageInputClass("border-error");
        setMessageErrorClass("form-error-alert");
    } else if (messageError !== true && messageInputClass === "border-error"){
        setMessageInputClass("");
        setMessageErrorClass("form-error-alert form-no-error");
    }
    if (formSend === true && formSendClass !== "form-send-alert") {
        setFormSendClass("form-send-alert");
    } else if (formSend !== true && formSendClass === "form-send-alert"){
        setFormSendClass("form-send-alert form-no-send");
    }

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
                            target="_blank" rel="noopener"
                        />
                        <a href="https://www.instagram.com/coders.lab" 
                            target="_blank" rel="noopener"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
