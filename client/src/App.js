import React, { useState, useEffect } from "react";
import RobertScene from "./components/RobertScene";
import SpeechScene from "./components/SpeechScene";

import "./App.css";

function App(props) {

  const userId = props.userId;
  const returning = props.returning;
  const mood = props.mood;
  const actions = props.actions;
  const speechText= props.speechText;
  const buttonText= props.buttonText;
  const talking = props.talking;
  return (
    <div className="wrapper">
      <RobertScene talking={true} {...props}/>
      <SpeechScene talking={true} {...props}/>
    </div>
  );
}


export default App;
