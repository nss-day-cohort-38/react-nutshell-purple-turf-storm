import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import MessagesList from "./message/MessageList";

const ApplicationViews = props => {
    const setUser = props.setUser;
    // const hasUser = props.hasUser;
    return (
        <React.Fragment>
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props}/>
            }}
            />
            <Route exact path="/" render={props => {
                return <Home />
            }}
            />
            <Route path="/messages"
            render={props => {
                return <MessagesList {...props} />;
            }}
            />
        </React.Fragment>
    )
}

export default ApplicationViews