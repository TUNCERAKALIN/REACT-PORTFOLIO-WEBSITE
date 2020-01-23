import React from "react";
import LandingPage from './landingpage'
import { Switch, Route } from "react-router-dom";
import Aboutme from "./aboutme"
import Contact from "./contact"
import Project from "./project"
import Resume from "./resume"

 

const Main = () => (
    <Switch>
        <Route exact path="/" component={ LandingPage }/>
        <Route exact path="/aboutme" component={ Aboutme}/>
        <Route exact path="/contact" component={ Contact}/>
        <Route exact path="/project" component={ Project}/>
        <Route exact path="/resume" component={ Resume }/>

    </Switch>
)


export default Main;