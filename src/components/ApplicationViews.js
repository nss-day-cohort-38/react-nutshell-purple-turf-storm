import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";
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
        exact
        path="/tasks"
        render={props => {
          return hasUser 
          ? <TaskList {...props} /> 
          : <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/tasks/new"
        render={props => {
          return hasUser ? <TaskForm {...props} /> : <Redirect to="/login" />;
        }}
      />
      <Route
        path="/messages"
        render={props => {
          if (hasUser) {
            return <MessageList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
