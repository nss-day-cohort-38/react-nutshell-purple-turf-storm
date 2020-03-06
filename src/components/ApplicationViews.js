import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";

const ApplicationViews = props => {
    const setUser = props.setUser;
    const hasUser = props.hasUser;
    return (
        <React.Fragment>
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props}/>
            }}
            />
            <Route exact="/" render={props => {
                return <Home />
            }}
            />
        </React.Fragment>
    )
}

export default ApplicationViews