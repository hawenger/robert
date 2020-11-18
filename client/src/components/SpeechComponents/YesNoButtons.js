import React from 'react';
import { useStoreContext} from "../../services/GlobalState";
import { RESET_ROBERT } from "../../services/actions";
import YesButtonTasks from "./YesButtonTasks";
export default function YesNoButtons(props) {

    const [state, dispatch] = useStoreContext();

    const resetTasks = () => {

        dispatch({
            type:  RESET_ROBERT,
        });
    }
    if(state.displayButton === true)
    return (
       null
    )
    return (
        <div className="YesNoButtons">
            <YesButtonTasks {...props} />
            <button className="yesnobtns no-btn" onClick={resetTasks}>NO</button>
        </div>
    )
    
}

