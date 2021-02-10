import React from "react";
import "./Skills.css";

import Header from "../utilities/Header/Header";
import ProgressBar from "../utilities/ProgressBar/ProgressBar";

const BarData = [
  { html: "HTML", bgcolor: "#BEB2A7", completed: 90 },
  { css: "CSS", bgcolor: "#D1C6BF", completed: 80 },
  { js: "JavaScript", bgcolor: "#DBD7CC", completed: 80 },
  { react: "React", bgcolor: "#CAB388", completed: 80 },
  { redux: "Redux", bgcolor: "#D5C4A1", completed: 60 },
  { typescript: "Typescript", bgcolor: "#E0D4BB", completed: 30 },
  { materialUi: "Material-UI", bgcolor: "#B5B292", completed: 20 },
  { nodejs: "Node.js", bgcolor: "#B5B292", completed: 50 },
  { expressjs: "Express.js", bgcolor: "#E0D4BB", completed: 40 },
  { postgresql: "PostgreSQL", bgcolor: "#D5C4A1", completed: 40 },
  { git: "GIT", bgcolor: "#BEB2A7", completed: 70 },
  { vscode: "VS Code", bgcolor: "#D1C6BF", completed: 70 },
  { npm: "npm", bgcolor: "#DBD7CC", completed: 60 },
  { webpack: "Webpack", bgcolor: "#CAB388", completed: 50 },
  { firebase: "Firebase", bgcolor: "#D5C4A1", completed: 50 },
  { heroku: "Heroku", bgcolor: "#E0D4BB", completed: 30 },
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
            <p>{BarData[0].html}</p>
            <ProgressBar
              className="bar"
              bgcolor={BarData[0].bgcolor}
              completed={BarData[0].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[1].css}</p>
            <ProgressBar
              bgcolor={BarData[1].bgcolor}
              completed={BarData[1].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[2].js}</p>
            <ProgressBar
              bgcolor={BarData[2].bgcolor}
              completed={BarData[2].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[3].react}</p>
            <ProgressBar
              bgcolor={BarData[3].bgcolor}
              completed={BarData[3].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[4].redux}</p>
            <ProgressBar
              bgcolor={BarData[4].bgcolor}
              completed={BarData[4].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[5].typescript}</p>
            <ProgressBar
              bgcolor={BarData[5].bgcolor}
              completed={BarData[5].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[6].materialUi}</p>
            <ProgressBar
              bgcolor={BarData[6].bgcolor}
              completed={BarData[6].completed}
            />
          </div>
        </div>
        {/* Set2 */}
        <div className="skills__container__content">
          <h2>Back-End</h2>
          <div className="skills__container__content__bar">
            <p>{BarData[7].nodejs}</p>
            <ProgressBar
              bgcolor={BarData[7].bgcolor}
              completed={BarData[7].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[8].expressjs}</p>
            <ProgressBar
              bgcolor={BarData[8].bgcolor}
              completed={BarData[8].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[9].postgresql}</p>
            <ProgressBar
              bgcolor={BarData[9].bgcolor}
              completed={BarData[9].completed}
            />
          </div>
        </div>
        {/* Set3 */}
        <div className="skills__container__content">
          <h2>Tool</h2>
          <div className="skills__container__content__bar">
            <p>{BarData[10].git}</p>
            <ProgressBar
              bgcolor={BarData[10].bgcolor}
              completed={BarData[10].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[11].vscode}</p>
            <ProgressBar
              bgcolor={BarData[11].bgcolor}
              completed={BarData[11].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[12].npm}</p>
            <ProgressBar
              bgcolor={BarData[12].bgcolor}
              completed={BarData[12].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[13].webpack}</p>
            <ProgressBar
              bgcolor={BarData[13].bgcolor}
              completed={BarData[13].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[14].firebase}</p>
            <ProgressBar
              bgcolor={BarData[14].bgcolor}
              completed={BarData[14].completed}
            />
          </div>
          <div className="skills__container__content__bar">
            <p>{BarData[15].heroku}</p>
            <ProgressBar
              bgcolor={BarData[15].bgcolor}
              completed={BarData[15].completed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
