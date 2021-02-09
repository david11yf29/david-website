import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Homepage from "./Homepage/Homepage";
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";

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
              {/* Sills */}
              <Route path="/skills" component={Skills} />
              {/* Contacts */}
              <Route path="/contacts" component={Contacts} />
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
