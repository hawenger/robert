import React, {setState} from 'react';
import { useStoreContext} from "../services/GlobalState";
import {  DISPLAY_OBJECT, RETURNING_USER, SHOW, RESET_ROBERT } from "../services/actions";
//
export default function YesNoButtons(props) {

    const [state, dispatch] = useStoreContext();
    
    //const { DisplayDiv } = YesButtonTasks;

    function noButtonTasks() {
        const linkDisplay= false;
        const toggleOff = false;
        const toggleOn = true;

        dispatch({
            type:  DISPLAY_OBJECT,
            showLink: linkDisplay,
            yesNoButtons: toggleOff,
            displayButton: toggleOn
        });
        dispatch({
            type:  SHOW,
        });
    }

    const YesButtonTasks = () => {
    const linkDisplay= true;
    const toggleOff = false;
    const toggleOn = true;
    const newLink= "WWW.GOOGLE.COM";

        dispatch({
            type:  DISPLAY_OBJECT,
            showLink: linkDisplay,
            yesNoButtons: toggleOff,
            displayButton: toggleOn,
            displayLink: newLink
        });
        dispatch({
            type:  SHOW,
        });
       // return (<DisplayDiv {...props}/>)
    }

    

    const resetTasks = () => {

        dispatch({
            type:  RESET_ROBERT,
        });
    }
    //if(state.displayButton == true)
    //return (
    //    null
    //)
    return (
        <div style={{}} className="YesNoButtons">
            <button onClick={YesButtonTasks}>YES</button>
            <button onClick={noButtonTasks}>NO</button>
            <button onClick={resetTasks}>RESET</button>
        </div>
    )
    
}

