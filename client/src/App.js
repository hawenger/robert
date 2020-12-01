import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { StoreProvider } from "./services/GlobalState";
import "./App.css";
import "./Robert.css";
import Home from "./Pages/Home";
import World from "./Pages/World";
import AboutRobert from "./Pages/AboutRobert"


function App(props) {

  return (
    <div className="wrapper">
      <StoreProvider>
        <Router>
          <Switch>
            <Route path="/world" component={World}/>
            <Route path="/aboutrobert" exact component={AboutRobert}/>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
      </StoreProvider>  
    </div>
  );
}



export default App;
