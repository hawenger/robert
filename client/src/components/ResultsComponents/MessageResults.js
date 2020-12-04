import React from 'react'
import { useStoreContext } from "../../services/GlobalState";
export default function MessageResults() {
    const state = useStoreContext();
    return (
        <div className="finalResultsDiv">
            <a href={state[0].link}>{state[0].link}</a>
        </div>
    )

}
