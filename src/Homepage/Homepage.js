import React from "react";
import "./Homepage.css";

import Beach from "./../img/beach.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__left">
        <img src={Beach} alt="beach" />
      </div>
      <div className="homepage__right">
        <div className="homepage__header">
          <h1>
            David Lin{" "}
            <span>
              A <br />
              Front-End Developer.
            </span>{" "}
            Love cool website
          </h1>
        </div>
        <div className="homepage__content">
          <p>
            Hi, I'm David. Currently working at Lam Research as a Process
            Engineer related in the semiconductor industry in Hsinchu City,
            Taiwan. In January 2019, I began to learn coding on multiple
            platforms like Udemy, Youtube, and Freecodecamp focus on Frond-End
            Development. Really enjoy codeing and making cool stuff. This is my
            personal website to show you my beautiful life.
          </p>
          <br />
          <span>Fight on</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
