import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function HomeNav() {
    return (
        <>
        <Link  className="bottom-market" to="/" style={{cursor:'pointer', color:'yellow', fontSize:'3em'}}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
        </>
    )
}