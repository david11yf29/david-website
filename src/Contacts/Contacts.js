import React from "react";
import "./Contacts.css";

import GoogleApi from "../utilities/GoogleApi/GoogleApi";

import Header from "../utilities/Header/Header";

const Contacts = () => {
  return (
    <div className="contacts">
      <Header title="Contacts" />
      <div className="contacts__container">
        <div className="contacts__container__content">
          <div className="contacts__container__content__form">
            This will be form input
          </div>
          <div className="contacts__container__content__maps">
            <GoogleApi />
          </div>
        </div>
        <div className="contacts__container__information">
          This is my information
        </div>
      </div>
    </div>
  );
};

export default Contacts;
