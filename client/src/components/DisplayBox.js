import React, {useReducer} from 'react';
import { useStoreContext} from "../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING } from "../services/actions";
import robertService from '../services/robertService';


export default function DisplayBox(props) {

const [state, dispatch] = useStoreContext();
//const [store] = useStoreContext();
//Results of Random Mood Picking Function
let randomMood;

//API Call & Pick Random Mood
//const getMoods = async () => {
    //let res = await robertService.getAllMood();
    //randomMood= res[Math.floor(Math.random()*res.length)];
//}
//Call API to get all moods
//getMoods();
const handleSubmit = () => {
    robertService.getAllMood({
        //res = await robertService.getAllMood();
        
    })
      .then(result => {
        randomMood= result[Math.floor(Math.random()*result.length)];
        dispatch({
          type: SET_ROBERT_MOOD_RETURNING,
          mood: randomMood.mood,
          speech: randomMood.innerText
        });
        console.log(state.mood);
        console.log(randomMood)
      })
      .catch(err => console.log(err));

    //titleRef.current.value = "";
    //bodyRef.current.value = "";
  };


//let newMood="happy";
//function buttonClick() {
//    console.log(randomMood);
//    dispatch({
//        type: SET_ROBERT_MOOD_RETURNING,
//        mood:randomMood.mood
//      });
//      console.log(randomMood);
//
//}
    let displayOn = false;
    //let innerText = "About this project"
    let projectLinkTitle = "About Waffles"
    if(displayOn===false) {
    return (
        <div className="DisplayDiv">
            <h1>{state.mood}</h1>
            <a>{projectLinkTitle}</a>
            <button onClick={() => handleSubmit()}>clickme</button>
        </div>
    )
    }
    return (
        <div></div>
    )
}
