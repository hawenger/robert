import React, { useState } from "react";
import "./App.css";
import "./Robert.css";
import robertService from './services/robertService';
import RobertSpeech from './components/RobertSpeech';
import RobertsBody from './components/RobertsBodyComponents/RobertsBody';
import { StoreProvider } from "./services/GlobalState";


function App(props) {

let robertsCookie;
let returningUser = "";

function generateUserId() {
    let userId = new Uint32Array(1);
    window.crypto.getRandomValues(userId);
    console.log(userId);
    return userId;
}

function generateNow() {
    let now = new Date();
    now.setMonth( now.getMonth() + 1 );
    return now;
}

function writeCookie() {
    let userId = generateUserId();
    let now = generateNow();
    document.cookie=`id= ${userId};`
    document.cookie=`expires= ${now.toUTCString()};`
}
    
function readCookie() {
    let currentCookie = document.cookie;
    if(currentCookie == "") {
        console.log("hello")
        writeCookie();
        console.log(document.cookie);
        robertsCookie = document.cookie
        setReturning(false);
        //console.log(returningUser)
    } else {
        console.log("welcome back")
        returningUser = true;
        setReturning(true);
        //console.log(returningUser)
    }
}



  //Code for Robert's Glowing Open Eye
  const [awake, setAwake] = useState(false);
  
  function wakeRobert() {
    setAwake(true);
  }

  //let currentId= "1234";
  //let possibleUsers= [];
  
  //const getUsers = async () => {
  //  let res = await robertService.getAllUser();
  //  possibleUsers = res.filter(element => element.userId === currentId);
  //}
  //getUsers();
  const [hideWake, setHideWake] = useState({display:"flex"});
  const [returning, setReturning] = useState(null);

  //function verifyUser() {
  //  if(possibleUsers === "" || possibleUsers.length > 1) {
  //    console.log('empty');
  //    
  //  } else if(possibleUsers[0].userId === currentId) {
  //    console.log('howdy')
  //    
  //  }
  //}
  function wakingRobert() {
    setHideWake({display:'none'});
    //verifyUser();
    readCookie();
    wakeRobert();
  }

  return (
    <div className="wrapper">
      <StoreProvider>
        <div className="RobertContainer">
          <RobertsBody awake={awake} {...props}/>
        </div>
        <div className= "SpeechContainer">
          <RobertSpeech {...props} returning={returning}/>
        </div>
        <div className="EmptyDiv-1"></div>
        <button style={hideWake} {...props} className = "WakeButton color-vibrate" onClick={wakingRobert}>Wake Robert</button>
        <div className="EmptyDiv-2"></div>
      </StoreProvider>  
    </div>
  );
}



export default App;
