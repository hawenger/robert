import React from 'react'
import { useStoreContext } from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 

export default function CallCreateSong(props) {

    let randomSongTitle= "Midnight in Rhapsody"

    const [state, dispatch] = useStoreContext();
    
    //Call API to get all moods
    //const setRobertReturning = () => {
    //    robertService.getAllMood({
    //    })
    //    .then(result => {
    //      const toggleOn = true;
    //      const toggleOff = false;
    //      randomMood= result[Math.floor(Math.random()*result.length)];
    //      dispatch({
    //        type: SET_ROBERT_MOOD_RETURNING,
    //        mood: randomMood.mood,
    //        returningSpeech: randomMood.innerText
    //      });
    //      dispatch({
    //          type: DISPLAY_OBJECT,
    //          yesNoButtons: toggleOn,
    //          displayButton: toggleOff
    //        });
    //    dispatch({
    //        type: HIDE
    //    });
    //    })
    //    .catch(err => console.log(err));
    // };
    const playASong = () => {
        
    };

    return (
        <>
            <button style={state.display} onClick={playASong}>PLAY ME A SONG</button>
        </>
    )
}
