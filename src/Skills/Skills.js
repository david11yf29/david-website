import React from "react";
import "./Skills.css";

import Header from "../utilities/Header/Header";
import ProgressBar from "../utilities/ProgressBar/ProgressBar";

const testData = [
  { bgcolor: "#CA8F42", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];

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
            <ProgressBar className="bar" bgcolor="#00695c" completed="70" />
          </div>
          <div className="skills__container__content__bar">
            <p>CSS</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>JavaScript</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>React</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>Redux</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>Typescript</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>Material-UI</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
        </div>
        {/* Set2 */}
        <div className="skills__container__content">
          <h2>Back-End</h2>
          <div className="skills__container__content__bar">
            <p>Node.js</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>Express.js</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>PostgreSQL</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
        </div>
        {/* Set3 */}
        <div className="skills__container__content">
          <h2>Tool</h2>
          <div className="skills__container__content__bar">
            <p>Git</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>VS Code IDE</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>npm</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>webpack</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>firebase</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>Heroku</p>
            <ProgressBar
              bgcolor={testData[0].bgcolor}
              completed={testData[1].completed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
