import React from "react";
import profilePic from "../img/profile.png";
import "./Sidebar.css";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src={profilePic} alt="profile" />
        <p>David Lin</p>
      </div>
      <div className="sidebar__content">
        <p>Home</p>
        <p>About Me</p>
        <p>Project</p>
        <p>Blog</p>
        <p>Photos</p>
        <p>Contact</p>
      </div>
      <div className="sidebar__footer">
        <h2>
          Copyright © 2021 <br />
          built by David Lin
        </h2>
        <p>david11yf29@gmail.com</p>
        <div className="sidebar__footer__icon">
          <GitHubIcon className="iconStyle" />
          <LinkedInIcon className="iconStyle" />
          <InstagramIcon className="iconStyle" />
          <FacebookIcon className="iconStyle" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// {/* Project*/}
// <section />

// {/* My Blog */}
// <section />

// {/* Photos of me */}
// <section />

// {/* Contact */}
// <section />
