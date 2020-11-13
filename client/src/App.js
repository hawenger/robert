import React, { useState, useRef } from "react";
import "./App.css";
import robertService from './services/robertService';
import RobertSpeech from './components/RobertSpeech';


function App() {
 
  const [returning, setReturning] = useState(null);
  //const [mood, setMood] = useState(null);
  //const [speechText, setMood] = useState(null);
  //const [user, setUserState] = useState(null);
  //const [robert, setRobertState] = useState(null);
  //const [speechBubble, setSpeechState] = useState(null);
  //const [buttons, setButtonState] = useState(null); 
  //const moodArray =[];
  //const userArray= [];
  let currentId= "1111";
  let possibleUsers= [];

  const getUsers = async () => {
    let res = await robertService.getAllUser();
    possibleUsers = res.filter(element => element.userId === currentId);
  }
  getUsers();

  function verifyUser() {
    if(possibleUsers == "" || possibleUsers.length > 1) {
      console.log('empty');
      setReturning(false);
    } else if(possibleUsers[0].userId === currentId) {
      console.log('howdy')
      setReturning(true);
    }
  }
  function wakingRobert() {
    verifyUser();
  }

  return (
    <div className="wrapper">
      <div className="RobertContainer">
      </div>
      <div className= "SpeechContainer">
        <RobertSpeech returning={returning}/>
      </div>
      <div className="EmptyDiv-1"></div>
      <button className = "WakeButton" onClick={wakingRobert}>Wake Robert</button>
      <div className="EmptyDiv-2"></div>
    </div>
  );
}



export default App;
