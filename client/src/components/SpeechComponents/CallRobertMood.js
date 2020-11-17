import React, {useState} from 'react'
import { useStoreContext} from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 


export default function CallRobertMood(props) {
    
    const [returningButton, setReturningButton] = useState("Show Me Something!")

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

    return (
        <>
            <button style={state.display} onClick={setRobertReturning}>{returningButton}</button>
        </>
    )
}
