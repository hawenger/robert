import React from 'react';
import { useStoreContext} from "../../services/GlobalState";


export default function DisplayBox(props) {


const [state] = useStoreContext();
console.log(state);
    return (
        <div className="yesButtonTasks">
            <a href={state.displayLink}>{state.linkName}</a>
        </div>
    )

}
