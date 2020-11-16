import React, { createContext, useReducer, useContext } from "react";
import robertService from './robertService';
import {
    SET_ROBERT_MOOD_RETURNING,
    RESET_ROBERT,
    RETURNING_USER,
    DISPLAY_OBJECT,
    HIDE,
    SHOW
    //ADD_POST,
    //ADD_FAVORITE,
    //UPDATE_FAVORITES,
    //REMOVE_FAVORITE,
    //LOADING
  } from "./actions";
  
const StoreContext = createContext();
const { Provider } = StoreContext;
//let randomMood;

//function apiCall() {
//  robertService.getAllMood({
//    //res = await robertService.getAllMood();
//    
//  })
//  .then(result => {
//    randomMood= result[Math.floor(Math.random()*result.length)];
//    
//    //console.log(state.mood);
//    console.log(randomMood)
//  })
//  .catch(err => console.log(err));
//
//  //titleRef.current.value = "";
//  //bodyRef.current.value = "";
//}


const reducer = (state, action) => {
    switch (action.type) {
    case SET_ROBERT_MOOD_RETURNING:
      //apiCall();
        return {
          ...state,
          mood: action.mood,
          returningSpeech: action.returningSpeech,
          speech:action.speech,
          //link: randomMood.link
        };
    case RETURNING_USER:
      return {
        ...state,
        returning: action.returning
      };
    case DISPLAY_OBJECT:
      return {
        ...state,
        yesNoButtons: action.yesNoButtons,
        displayButton: action.displayButton,
        showLink: action.showLink
      };
    case HIDE:
      return {
        ...state,
        display: {display: 'none'}
      };
    case SHOW:
      return {
        ...state,
        display: {display: 'flex'}
      };
    case RESET_ROBERT:
    return {
      ...state,
      mood: null,
      returningSpeech:"Would you like to see something else?",
      speech:"",
      returning: true,
      yesNoButtons: false,
      displayButton: true,
      display: {display:'flex'},
    };
    default:
      return state;
    }
  };
  
  const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      mood: null,
      returningSpeech:"How can I help you?",
      newUserSpeech:"",
      speech:"",
      returning: null,
      showLink: null,
      yesNoButtons: false,
      displayButton: true,
      display: {display:'flex'},
      displayLink: null
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
export { StoreProvider, useStoreContext };
  