import React, { useState, useEffect } from "react";
import RobertScene from "./components/RobertScene";
import SpeechScene from "./components/SpeechScene";

import "./App.css";

function App() {
  const user = {userId:"1234", returning:true};
  const robert = {mood:"helpful", actions:""};
  const speechBubble = {talking:true, speechText:"Hello"};
  const buttons = {buttonText:["YES", "NO"]}
  //const mood = props.mood;
  //const actions = props.actions;
  //const speechText= props.speechText;
  //const buttonText= props.buttonText;
  //const talking = props.talking;
  return (
    <div className="wrapper">
      <RobertScene talking={true}/>
      <SpeechScene robert = {robert} speechBubble = {speechBubble} user = {user} buttons = {buttons}/>
    </div>
  );
}


export default App;
