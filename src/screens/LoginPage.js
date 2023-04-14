import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginBanner from "../components/LoginBanner";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/dashboard");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <LoginBanner />
      <form onSubmit={handleLogin} className="login-box">
        <label className="login-label">
          USC EMAIL
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label className="login-label">
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit" className="login-page-button">
          <Link to="/homepage" className="login-link">
            Login
          </Link>
        </button>
        <button className="login-page-button">
          <Link to="/registration">Sign Up</Link>
        </button>
        <button className="">
          <Link to="/homeu">Continue as Guest</Link>
        </button>

        <button className="arrow-button">
          <img src="/vector3.png" alt="Button icon" className="arrow-image" />
        </button>
      </form>
    </>
  );
}

export default LoginPage;
