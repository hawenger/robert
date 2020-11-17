import React from 'react';
import { useStoreContext} from "../services/GlobalState";
//import {YesButtonTasks} from './YesNoButtons'


export default function DisplayBox(props) {


const [state] = useStoreContext();
console.log(state);
    //if(state.linkDisplay !== true)
    //return(
    //    null
    //)
    return (
      // <YesButtonTasks {...props}>
            <div className="yesButtonTasks">
                <h1>{state.displayLink}</h1>
                <h1>{state.returningSpeech}</h1>
            </div>
      // </YesButtonTasks>
    )

}
