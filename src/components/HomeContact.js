import React from 'react'

export default function HomeContact() {
    return (
        <div className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__container__content">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decoration"/>
                    <form className="contact__container__content__form">
                        <div className="contact__container__content__form__personal-data">
                            <label>Wpisz swoje imię
                                <input type="name"/>
                            </label>
                            <label>Wpisz swój email
                                <input type="email"/>
                            </label>
                        </div>
                        <div className="contact__container__content__form__message">
                            <label>Wpisz swoją wiadomość
                                <textarea/>
                            </label>
                        </div>
                        <div className="contact__container__content__form__button">Wyślij</div>
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
