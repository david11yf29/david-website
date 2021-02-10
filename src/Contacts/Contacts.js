import React from "react";
import "./Contacts.css";

import GoogleApi from "../utilities/GoogleApi/GoogleApi";

import Header from "../utilities/Header/Header";
import Button from "../utilities/Button/Button";

const Contacts = () => {
  return (
    <div className="contacts">
      <Header title="Contacts" />
      <div className="contacts__container">
        <div className="contacts__container__content">
          <div className="contacts__container__content__form">
            <div className="contacts__container__content__form__input">
              <input placeholder="Your Name" type="text" />
              <input placeholder="Your Email" type="email" />
              <input placeholder="Subject" type="text" />
              <textarea placeholder="Message" type="text" />
            </div>
            <div className="contacts__container__content__form__submit">
              <Button title="Send Message" width="20vw" />
            </div>
          </div>
          <div className="contacts__container__content__maps">
            <GoogleApi />
          </div>
        </div>
        <div className="contacts__container__information">
          <h2>HAVE A QUESTION?</h2>
          <div className="contacts__container__information__info">
            <div className="contacts__container__information__info__icon">
              <div />
              <p>1359 West Adams Blvd, Los Angeles, California, USA</p>
              <div />
              <p>+886 937 250 024</p>
              <div />
              <p>david11yf29@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
