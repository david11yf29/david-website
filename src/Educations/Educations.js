import React from "react";
import "./Educations.css";

import Header from "../utilities/Header/Header";

const Educations = () => {
  return (
    <div className="educations">
      <Header title="Educations" />
      <div className="educations__container">
        <div className="educations__container__square">School one</div>
        <div className="educations__container__square">School two</div>
        <div className="educations__container__square">School three</div>
      </div>
    </div>
  );
};

export default Educations;
