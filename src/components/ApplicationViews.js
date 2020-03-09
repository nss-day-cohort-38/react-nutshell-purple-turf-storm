import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import MessageList from "./message/MessageList";

const ApplicationViews = props => {
  const setUser = props.setUser;
  const hasUser = props.hasUser;
  return (
    <React.Fragment>
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/messages"
        render={props => {
          return hasUser ? (
            <MessageList {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
