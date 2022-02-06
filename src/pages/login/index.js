import React, { useEffect, useState } from "react";
// import { FaWindows } from "react-icons/fa";
import "./style.css";

const Login = ({ user, setUser, pass, setPass }) => {
  if (user && pass) window.location.href = "/";
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginHandler = () => {
    setUser(username);
    setPass(password);
  };
  return (
    <div className="form">
      <div className="imgcontainer">
        <img src="icon.png" alt="Avatar" class="avatar" />
      </div>
      <div className="loginContainer">
        <label for="Username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label for="Password">
          <b>Password</b>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginHandler}>Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>
    </div>
  );
};

export default Login;
