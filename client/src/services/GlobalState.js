import React, { createContext, useReducer, useContext } from "react";
import robertService from './robertService';
import {
    SET_ROBERT_MOOD_RETURNING,
    LINK_INTEREST,
    LINK_DISINTEREST
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
          speech: action.speech
          //link: randomMood.link
        };
    case LINK_INTEREST:
      return {
        ...state,
        showLink: true
      };
  
    case LINK_DISINTEREST:
      return {
        ...state,
        showLink:false
      };

      case LINK_DISINTEREST:
        return {
          ...state,
          showLink:false
        };
  
    default:
      return state;
    }
  };
  
  const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      mood: null,
      speech:"",
      showLink: Boolean
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
export { StoreProvider, useStoreContext };
  