import React, {setState} from 'react';
import { useStoreContext} from "../../services/GlobalState";
import {  DISPLAY_OBJECT, RETURNING_USER, SHOW, RESET_ROBERT } from "../../services/actions";
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
    const newLinkName= "GOOGLE";

        dispatch({
            type:  DISPLAY_OBJECT,
            showLink: linkDisplay,
            yesNoButtons: toggleOff,
            displayButton: toggleOn,
            displayLink: newLink,
            linkName: newLinkName
        });
        dispatch({
            type:  SHOW,
        });
    }

    

    const resetTasks = () => {

        dispatch({
            type:  RESET_ROBERT,
        });
    }
    if(state.displayButton == true)
    return (
       null
    )
    return (
        <div style={{}} className="YesNoButtons">
            <button className="yesnobtns yes-btn" onClick={YesButtonTasks}>YES</button>
            <button className="yesnobtns no-btn" onClick={noButtonTasks}>NO</button>
            <button className="yesnobtns reset-btn" onClick={resetTasks}>RESET</button>
        </div>
    )
    
}

