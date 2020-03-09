import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import MessageList from "./message/MessageList";
import NewsList from "./news/NewsList";

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
          if (hasUser) {
            return <MessageList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/news"
        render={props => {
          return hasUser ? <NewsList {...props} /> : <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/news/:newsId(\d+)"
        render={props => {
          return hasUser ? (
            <NewsDetail
              newsId={parseInt(props.match.params.newsId)}
              {...props}
            />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
      <Route
        path="/news/:newsId(\d+)/edit"
        render={props => {
          return hasUser ? (
            <NewsEditForm {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
