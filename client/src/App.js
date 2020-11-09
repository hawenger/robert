import React, { useState, useEffect } from "react";
import DeveloperContext from "./utils/DeveloperContext";
import DeveloperInfo from "./components/Developer";
import * as API from "./utils/API";

import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    mood:"",
    actions:"",
    userid:0,
    returning: false,
    speechbubbletext:"",
    buttontext:""
  });

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.checkInUser.then((res) => {
      setDeveloperState(res);
    });
  }, []);



  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <DeveloperContext.Provider value={developerState}>
      <DeveloperInfo />
      </DeveloperContext.Provider>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
