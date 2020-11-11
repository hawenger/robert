import React, { useState, useEffect } from "react";
//import RobertScene from "./components/RobertScene";
//import SpeechScene from "./components/SpeechScene";

// SERVICES
import robertService from './services/robertService';

import "./App.css";

function App() {
  //const user = {userId:"1234", returning:true};
  //const robert = {mood:"helpful", actions:""};
  //const speechBubble = {talking:true, speechText:"Hello"};
  //const buttons = {buttonText:["YES", "NO"]}
  //return (
  //  <div className="wrapper">
  //    <RobertScene talking={true}/>
  //    <SpeechScene robert = {robert} speechBubble = {speechBubble} user = {user} buttons = {buttons}/>
  //  </div>
  //);

  
//}
const [users, setusers] = useState(null);

  useEffect(() => {
    if(!users) {
      getusers();
    }
  })

  const getusers = async () => {
    let res = await robertService.getAllUser();
    console.log(res);
    setusers(res);
  }

  const renderuser = user => {
    return (
      <li key={user._id} className="list__item user">
        <h3 className="user__name">{user.userId}</h3>
        <p className="user__description">{user.date}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(users && users.length > 0) ? (
          users.map(user => renderuser(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}



export default App;
