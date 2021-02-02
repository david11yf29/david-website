import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Homepage from "./Homepage/Homepage";
import Projects from "./Projects/Projects";

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
