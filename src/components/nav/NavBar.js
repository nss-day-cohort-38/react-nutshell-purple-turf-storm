import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <header>
      <img src="https://www.svgrepo.com/show/133829/acorn.svg" alt="Acorn Icon"></img>   
      <h1 className="site-title">Nutshell</h1>
      <nav>
        <ul className="container">
    
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/messages">
                Messages
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/tasks">
                Tasks
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/friends">
                Friends
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link className="nav-link" to="/login">
                Login/Register
              </Link>
            </li>
          )}
        </ul>
    
    
      </nav>
    </header>
  );
};

export default withRouter(NavBar)