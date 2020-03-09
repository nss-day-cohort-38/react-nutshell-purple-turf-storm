import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";
import MessageList from "./message/MessageList";
import EventList from "./event/EventList";
import EventForm from "./event/EventForm";
import EventEditForm from "./event/EventEditForm";
import TaskEditForm from "./task/TaskEditForm";

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

        <Route
         path="/events/new"
        render={props => {
          return <EventForm {...props} />;
        }}
      /> 

      <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
         return hasUser
         ? <EventList {...props} />
         : <Redirect to="/login" />;
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
        path="/tasks/:taskId(\d+)/edit"
        render={props => {
            return hasUser
            ? <TaskEditForm {...props} />
            : <Redirect to="/login" />
        }}
        />
     
     )};

        export default ApplicationViews
    



            




















        </React.Fragment>
    )
}

export default ApplicationViews;
