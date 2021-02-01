import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Picture Here</h2>
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
        <h2>Footer Here</h2>
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
