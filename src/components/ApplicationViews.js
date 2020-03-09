import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import MessageList from "./message/MessageList";
import EventList from "./event/EventList";

const ApplicationViews = props => {
    const setUser = props.setUser;
    const hasUser = props.hasUser;
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
                if (hasUser) {
                    return <MessageList {...props} />
                } else {
                    return <Redirect to="/login"/>
                }
            }}
            />


            <Route exact path="/events" render={props => {
                return <EventList  setUser={setUser} {...props}/>
            }}
            />
            {/* <Route exact path="/" render={props => {
                return <Events />
            }}
            />
            <Route path="/events"
            render={props => {
                if (hasUser) {
                    return <EventList {...props} />
                } else {
                    return <Redirect to="/home"/> */}
                }
            }}
            />




















        </React.Fragment>
    )
}

export default ApplicationViews