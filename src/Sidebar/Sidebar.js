import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="sidebar__content__item" to="/">
          <p>Home</p>
        </Link>
        <Link className="sidebar__content__item" to="/projects">
          <p>Projects</p>
        </Link>
        <Link className="sidebar__content__item" to="/blog">
          <p>Blog</p>
        </Link>
        <Link className="sidebar__content__item" to="/photos">
          <p>Photos</p>
        </Link>
        <Link className="sidebar__content__item" to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="sidebar__footer">
        <h2>
          Copyright © 2021 <br />
          built by David Lin
        </h2>
        <p>david11yf29@gmail.com</p>
        <div className="sidebar__footer__icon">
          <GitHubIcon
            onClick={() => window.open("https://github.com/david11yf29")}
            className="iconStyle"
          />
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/david11yf29/")
            }
            className="iconStyle"
          />
          <InstagramIcon
            onClick={() =>
              window.open("https://www.instagram.com/david11yf29/")
            }
            className="iconStyle"
          />
          <FacebookIcon
            onClick={() => window.open("https://www.facebook.com/david11yf29")}
            className="iconStyle"
          />
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
