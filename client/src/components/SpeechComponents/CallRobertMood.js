import React, {useState} from 'react'
import { useStoreContext} from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 


export default function CallRobertMood(props) {
    
    const [returningButton] = useState("Show Me Something!")

    const [state, dispatch] = useStoreContext();
    
    //Holds random mood result
    let randomMood;

    //Call API to get all moods
    const setRobertReturning = () => {
        robertService.getAllMood({

        })
        .then(result => {  
          const clearTitle = null; 
          const toggleOn = true;
          const toggleOff = false;
          randomMood= result[Math.floor(Math.random()*result.length)];
          dispatch({
            type: SET_ROBERT_MOOD_RETURNING,
            mood: randomMood.mood,
          });
          dispatch({
              type: DISPLAY_OBJECT,
              yesNoButtons: toggleOn,
              displayButton: toggleOff,
              speech: randomMood.innerText,
              title: clearTitle
            });
        dispatch({
            type: HIDE
        });
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <button className="actionbtn" style={state.display} onClick={setRobertReturning}><i style={{color: 'rgba(255, 53, 46, 0.46)', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} class="fa fa-eye" aria-hidden="true"></i></button>
        </>
    )
}
