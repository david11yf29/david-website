import React from "react";
import "./Skills.css";

import Header from "../utilities/Header/Header";
import CustomizedProgressBars from "../utilities/Bar/Bar";

const Skills = () => {
  return (
    <div className="skills">
      <Header title="Technical Skills" />
      <div className="skills__container">
        {/* Set1 */}
        <div className="skills__container__content">
          <h2>Front-End</h2>
          <div className="skills__container__content__bar">
            <p>HTML</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>CSS</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>JavaScript</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>React</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>Redux</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>Typescript</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>Material-UI</p>
            <CustomizedProgressBars />
          </div>
        </div>
        {/* Set2 */}
        <div className="skills__container__content">
          <h2>Back-End</h2>
          <div className="skills__container__content__bar">
            <p>Node.js</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>Express.js</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>PostgreSQL</p>
            <CustomizedProgressBars />
          </div>
        </div>
        {/* Set3 */}
        <div className="skills__container__content">
          <h2>Tool</h2>
          <div className="skills__container__content__bar">
            <p>Git</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>VS Code IDE</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>npm</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>webpack</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>firebase</p>
            <CustomizedProgressBars />
          </div>
          <div className="skills__container__content__bar">
            <p>Heroku</p>
            <CustomizedProgressBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
