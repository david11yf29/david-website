import React from "react";
import Header from "../utilities/Header/Header";
import "./Projects.css";

import LinkIcon from "@material-ui/icons/Link";

import spotify from "../img/spotify.png";
import linkedin from "../img/linkedin.png";
import faceRecog from "../img/face-recog.png";
import jotto from "../img/jotto.png";

const Projects = () => {
  return (
    <div className="projects">
      <Header title="Projects" />
      <div className="projects__container">
        <div className="projects__container__square">
          <img src={spotify} alt="spotify" />
          <div className="projects__container__square__description">
            <h2>Spotify Clone</h2>
            <ul>
              <li>Use React, Redux-toolkit and material-ui to build website</li>
              <li>
                Use spotify api for user auth and request user data such as
                playlists
              </li>
              <li>Use firebase for deployment</li>
            </ul>
            {/* <div className="link">
              <LinkIcon />
              <a
                href="https://spotify-clone-app-a13de.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                Link
              </a>
            </div> */}
          </div>
        </div>
        <div className="projects__container__square">
          <img src={linkedin} alt="linkedin" />
          <div className="projects__container__square__description">
            <h2>Linkedin Clone</h2>
            <ul>
              <li>Use React, Redux-toolkit and material-ui to build website</li>
              <li>Use firebase for user sign up and data storage</li>
              <li>Use firebase for deployment</li>
            </ul>
            {/* <div className="link">
              <LinkIcon />
              <a
                href="https://linkedin-clone-yt-4b439.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                Link
              </a>
            </div> */}
          </div>
        </div>
        <div className="projects__container__square">
          <img src={faceRecog} alt="faceRecog" />
          <div className="projects__container__square__description">
            <h2>Face Recognition</h2>
            <ul>
              <li>Use Clarifai's face detection API to detect human fa</li>
              <li>
                Use Express.js, PostgreSQL to build user sign-in and register
                server and connect to database
              </li>
              <li>Use React, Redux to build website</li>
              <li>Deploy application through Heroku platform</li>
            </ul>
          </div>
        </div>
        <div className="projects__container__square">
          <img src={jotto} alt="jotto" />
          <div className="projects__container__square__description">
            <h2>Jotto Testing</h2>
            <ul>
              <li>Use enzyme for unit testing and integration testing</li>
              <li>Use redux-thunk for asynchronous work</li>
              <li>Use React, Redux to build website</li>
            </ul>
            <div className="link">
              <LinkIcon />
              <a
                href="https://linkedin-clone-yt-4b439.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <ul>
  <li>Use React, Redux-toolkit and material-ui to build website</li>
  <li>
    Use spotify api for user auth and request user data such as
    playlists
  </li>
  <li>Use firebase for deployment</li>
  <a href="/">Link is Here</a>
</ul> */
}
