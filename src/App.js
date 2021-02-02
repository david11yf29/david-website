import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";

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
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
            </Switch>
          </div>

          {/* <div className="main-right">
            <div className="main-right-pic">
              <img src={Beach} alt="beach" />
            </div>
            <div className="main-right-content">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </div> */}
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
