import React from "react";
import "./Skills.css";

import Header from "../utilities/Header/Header";
import CustomizedProgressBars from "../utilities/Bar/Bar";

const Skills = () => {
  return (
    <div className="skills">
      <Header title="Technical Skills" />
      <div className="skills__container">
        <div className="skills__container__content">
          <h2>Language</h2>
          <div className="skills__container__content__bar">
            <p>HTML</p>
            <CustomizedProgressBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
