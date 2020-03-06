import React, { useState } from "react";
import "../Nutshell.css";
import UserManager from "../../modules/UserManager";

const Login = props => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: ""
  });

  // Update state whenever an input field is edited
  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    let valid = false;
    UserManager.getAll().then(users => {
      users.filter(user => {
        if (
          user.userName === credentials.userName &&
          user.password === credentials.password
        ) {
          valid = true;
          props.setUser(credentials);
          props.history.push("/");
        }
      });
      if (!valid) {
        alert("incorrect username/password");
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <label htmlFor="inputUserName">Username: </label>
          <input
            onChange={handleFieldChange}
            type="userName"
            id="userName"
            placeholder="Username"
            required=""
            autoFocus=""
          />

          <label htmlFor="inputPassword">Password: </label>
          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;
