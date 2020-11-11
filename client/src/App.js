import React, { useState, useRef } from "react";
import RobertScene from "./components/RobertScene";
import SpeechScene from "./components/SpeechScene";

// SERVICES
import robertService from './services/robertService';

import "./App.css";

function App() {

  const [user, setUserState] = useState({userId:"1234", returning:true});
  const [robert, setRobertState] = useState({mood:"greeting", actions:""});
  const [speechBubble, setSpeechState] = useState({talking:false, speechText:["CIAO"]});
  const [buttons, setButtonState] = useState({buttonText:["HELLO", "GOODBYE"]});

  //useEffect(() => {
  //  if(!robert) {
  //   getmoods();
  //}
  //})

  const getmoods = async () => {
    let res = await robertService.getAllMood();
    console.log(res);
    let randomMood= res[Math.floor(Math.random()*res.length)];
    console.log(randomMood);
    //user.returning = randomMood.returning;
    speechBubble.talking = randomMood.talking;
    speechBubble.speechText = randomMood.innerText;
    console.log(robert);
    //.map(element => element.userId)
    //console.log(x)
    setRobertState({mood: randomMood.mood, actions: randomMood.action});
    setSpeechState({talking: randomMood.talking, speechText: randomMood.innerText});
    }
    //getmoods();
//const [users, setusers] = useState(null);
  //setState(userid, x);

  //const getusers = async () => {
  //  let res = await robertService.getAllUser();
  //  console.log(res);
  //  const x = res.map(element => element.userId)
  //  console.log(x)
  //  setState(user.userId, x);
  //}
  return (
    <div className="wrapper">
      <RobertScene talking={true}/>
      <SpeechScene robert = {robert} speechBubble = {speechBubble} user = {user} buttons = {buttons}/>
      <button onClick={getmoods}>Hello Robert</button>
    </div>
  );

  //const renderuser = user => {
  //  return (
  //    <li key={user._id} className="list__item user">
  //      <h3 className="user__name">{user.userId}</h3>
  //      <p className="user__description">{user.date}</p>
  //    </li>
  //  );
  //};

  //return (
  //  <div className="App">
  //    <ul className="list">
  //      {(users && users.length > 0) ? (
  //        users.map(user => renderuser(user))
  //      ) : (
  //        <p>No users found</p>
  //      )}
  //    </ul>
  //  </div>
  //);
}



export default App;
