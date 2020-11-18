import React, { useState } from "react";
import "./App.css";
import "./Robert.css";
import robertService from './services/robertService';
import RobertSpeech from './components/RobertSpeech';
import RobertsBody from './components/RobertsBodyComponents/RobertsBody';
import { StoreProvider } from "./services/GlobalState";


function App(props) {

  let currentId= "1234";
  let possibleUsers= [];

  const getUsers = async () => {
    let res = await robertService.getAllUser();
    possibleUsers = res.filter(element => element.userId === currentId);
  }
  getUsers();

  const [returning, setReturning] = useState(null);

  function verifyUser() {
    if(possibleUsers === "" || possibleUsers.length > 1) {
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
      <StoreProvider>
        <div className="RobertContainer">
          <RobertsBody {...props}/>
        </div>
        <div className= "SpeechContainer">
          <RobertSpeech {...props} returning={returning}/>
        </div>
        <div className="EmptyDiv-1"></div>
        <button {...props} className = "WakeButton" onClick={wakingRobert}>Wake Robert</button>
        <div className="EmptyDiv-2"></div>
      </StoreProvider>  
    </div>
  );
}



export default App;
