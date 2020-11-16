import React, {useState} from 'react'
import { useStoreContext} from "../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../services/actions";
import robertService from '../services/robertService'; 
import YesNoButtons from './YesNoButtons';

export default function SpeechBubble(props) {
    //SETTING STATES
    const [returningButton, setReturningButton] = useState("Show Me Something!")
    const [newButton, setnewButton] = useState("Nice to Meet You!")
    const [newUserSpeech, setNewUserSpeech] = useState("Hi, I'm Robert!");
    
    const [state, dispatch] = useStoreContext();
    
    //Holds random mood result
    let randomMood;

    //Call API to get all moods
    const setRobertReturning = () => {
        robertService.getAllMood({

        })
        .then(result => {
          const toggleOn = true;
          const toggleOff = false;
          randomMood= result[Math.floor(Math.random()*result.length)];
          dispatch({
            type: SET_ROBERT_MOOD_RETURNING,
            mood: randomMood.mood,
            returningSpeech: randomMood.innerText
          });
          dispatch({
              type: DISPLAY_OBJECT,
              yesNoButtons: toggleOn,
              displayButton: toggleOff
            });
            dispatch({
              type: HIDE
            });
        })
        .catch(err => console.log(err));
    };

    //Determine if user is returning thus what to render
    if(props.returning === false) {
        return (
            <div className="BubbleGoodies">
                <h1>{newUserSpeech}</h1>
                <button onClick={setRobertReturning}>{newButton}</button>
                <YesNoButtons  {...props}/>
            </div>
        )
    }
    return (
        <div className="BubbleGoodies">
            <h1>{state.returningSpeech}</h1>
            <button style={state.display} onClick={setRobertReturning}>{returningButton}</button>
            <YesNoButtons {...props}/>
        </div>
    )
}
