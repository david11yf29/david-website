import React from "react";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";

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
            {/* Homepage */}
            {/* About Me */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// {/* Project*/}
// <section />

// {/* My Blog */}
// <section />

// {/* Photos of me */}
// <section />

// {/* Contact */}
// <section />
