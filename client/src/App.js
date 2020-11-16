import React, { useState, useReducer } from "react";
import "./App.css";
import "./Robert.css";
import robertService from './services/robertService';
import RobertSpeech from './components/RobertSpeech';
import RobertsBody from './components/RobertsBody';
import { StoreProvider } from "./services/GlobalState";


function App(props) {
  //const [state, dispatch] = useReducer(reducer, initialState);
  //const moods = [{mood:'welcome'}, {mood:'helpful'}, {mood:'sing'}];
  //const [state, dispatch] = useReducer(reducer, moods);
  //const reducer = (moods, action) => {
  //  if(action.type == 'changeMood') {
  //    let newMood= moods[Math.floor(Math.random()*moods.length)];
  //    moods.mood=newMood;
  //  }
  //} 
  //function init(initialMood) {
  //  return {mood: null};
  //}
  ////const initialState = {mood:null};
//
  //function reducer(state, action) {
  //  switch(action.type) {
  //    case 'setMood':
  //      return {mood: state.mood = mood};
  //      default:
  //        throw new Error();
  //  }
  //}
  //function RobertMood() {
  //  const [state, dispatch] = useReducer(reducer, initialState);
  //  return (
  //    <>
  //      RobertMood: {state.mood}
  //      <button onClick={() => dispatch({type: 'setMood'})}>-</button>
  //    </>
  //  );
  //}
  
  const [returning, setReturning] = useState(null);
  //const [mood, setMood] = useState(null);
  //const [speechText, setMood] = useState(null);
  //const [user, setUserState] = useState(null);
  //const [robert, setRobertState] = useState(null);
  //const [speechBubble, setSpeechState] = useState(null);
  //const [buttons, setButtonState] = useState(null); 
  //const moodArray =[];
  //const userArray= [];
  let currentId= "1234";
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
      <StoreProvider>
        <div className="RobertContainer">
          <RobertsBody/>
        </div>
        <div className= "SpeechContainer">
          <RobertSpeech {...props}returning={returning}/>
        </div>
        <div className="EmptyDiv-1"></div>
        <button {...props}className = "WakeButton" onClick={wakingRobert}>Wake Robert</button>
        <div className="EmptyDiv-2"></div>
      </StoreProvider>  
    </div>
  );
}



export default App;
