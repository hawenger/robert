import React from 'react';
import { useStoreContext} from "../../services/GlobalState";


export default function DisplayBox(props) {

    const [state] = useStoreContext();

    return (
        <div className="yesButtonTasks">
            <a href={state.link}>{state.title}</a>
        </div>
    )

}
