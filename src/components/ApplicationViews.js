import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import TaskList from "./task/TaskList";

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
            <Route
            exact
            path="/tasks"
            render={props => {
                if (hasUser) {
                    return <TaskList {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
            />
        </React.Fragment>
    )
}

export default ApplicationViews