import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Homepage from "./Homepage/Homepage";
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";
import Photos from "./Photos/Photos";

const App = () => {
  return (
    <div className="App">
      <div className="billboard">
        <div className="main">
          <div className="main-left">
            {/* Sidebar */}
            <Sidebar />
          </div>

          <div className="main-right">
            <Switch>
              {/* Homepage */}
              <Route exact path="/" component={Homepage} />
              {/* Projects */}
              <Route path="/projects" component={Projects} />
              {/* Blogs */}
              <Route path="/blogs" component={Blogs} />
              {/* Photos */}
              <Route path="/photos" component={Photos} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// About Me
// <About />

// {/* Project*/}
// <section />

// {/* My Blog */}
// <section />

// {/* Photos of me */}
// <section />

// {/* Contact */}
// <section />
