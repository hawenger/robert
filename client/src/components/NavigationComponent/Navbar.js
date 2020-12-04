import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStoreContext } from "../../services/GlobalState";

export default function Navbar() {
    const [state, dispatch] = useStoreContext();
    return (
        <>
            <Link to="/world" className="bottom-market" style={state.display}><i style={{color:'rgba(255, 53, 46, 0.46)', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} className="fa fa-map-signs" aria-hidden="true"></i></Link>
            <Link c to="/aboutrobert" className="bottom-market" style={state.display}><i style={{color:'rgba(255, 53, 46, 0.46)', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} class="fa fa-child" aria-hidden="true"></i></Link>
        </>
    )
}
