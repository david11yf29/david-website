import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Homepage from "./Homepage/Homepage";

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
