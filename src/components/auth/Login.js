import React, { useState } from "react";
import "../Nutshell.css";
import UserManager from "../../modules/UserManager";

const Login = props => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: ""
  });

  const [register, setRegister] = useState({
    userName: "",
    password: "",
    email: "",
    confirmPassword: ""
  });

  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRegFieldChange = evt => {
    const stateToChange = { ...register };
    stateToChange[evt.target.id] = evt.target.value;
    setRegister(stateToChange);
  };

  const handleReg = e => {
    e.preventDefault();
    let valid = true;
    UserManager.getAll().then(users => {
      users.map(user => {
        if (user.userName === register.userName) {
          valid = false;
          alert("Username already in database");
        }
      });
      if (register.password !== register.confirmPassword) {
        valid = false;
        alert("Passwords do not match");
      }
      if (
        register.userName === "" ||
        register.password === "" ||
        register.email === ""
      ) {
        valid = false;
        alert("Please Fill in all fields");
      }
      if (valid) {
        props.history.push("/");
        const newUser = {
          userName: register.userName,
          password: register.password,
          email: register.email
        };
        UserManager.post(newUser)
          .then(UserManager.getAll)
          .then(users => {
            const newCred = {
              userName: register.userName,
              password: register.password
            };
            props.setUser(newCred, users.length);
          });
      }
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    let valid = false;
    UserManager.getAll().then(users => {
      users.map(user => {
        if (
          user.userName === credentials.userName &&
          user.password === credentials.password
        ) {
          valid = true;
          props.setUser(credentials, user.id);
          props.history.push("/");
        }
      });
      if (!valid) {
        alert("incorrect username/password");
      }
    });
  };

  return (
    <>
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

      <form onSubmit={handleReg}>
        <fieldset>
          <h3>Make a new account</h3>
          <div className="formgrid">
            <label htmlFor="inputUserName">Username: </label>
            <input
              onChange={handleRegFieldChange}
              type="userName"
              id="userName"
              placeholder="Username"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputEmail">Email: </label>
            <input
              onChange={handleRegFieldChange}
              type="email"
              id="email"
              placeholder="Email"
              required=""
            />

            <label htmlFor="inputPassword">Password: </label>
            <input
              onChange={handleRegFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />

            <label htmlFor="inputConfirmPassword">Confirm Password: </label>
            <input
              onChange={handleRegFieldChange}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required=""
            />
          </div>
          <button type="submit">Register</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
