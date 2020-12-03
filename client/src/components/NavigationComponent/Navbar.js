import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Link to="/world">ENTER WORLD</Link>
            <Link to="/about">ABOUT ROBERT</Link>
        </>
    )
}
