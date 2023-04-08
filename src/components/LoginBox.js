import React, { useState } from "react";
import "./LoginBox.css";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-box">
      <label className="login-label">
        USC EMAIL
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label className="login-label">
        PASSWORD
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit" className="login-page-button">Login</button>
      <button type="submit" className="login-page-button">Sign Up</button>
      <button type="submit" className="">Continue as Guest</button>

      <button type="submit" className="arrow-button">
        <img src="/vector3.png" alt="Button icon" className="arrow-image"/>
      </button>
    </form>
  );
}

export default LoginBox;
