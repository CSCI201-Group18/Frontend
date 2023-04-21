import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidRegistration, setInvalidRegistration] = useState(false);
  const [username, setUsername] = useState("");
  const userID = 1;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setUsername(newEmail);
    setInvalidEmail(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setInvalidRegistration(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setInvalidRegistration(false);
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    if (!email.endsWith("@usc.edu")) {
      setInvalidEmail(true);
      return;
    }

    if (password !== confirmPassword) {
      setInvalidRegistration(true);
      return;
    }

    fetch("http://localhost:8080/api/addUser/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if ("error" in data && data["error"] === "Email already exists.") {
          setInvalidRegistration(true);
        } else {
          setInvalidRegistration(false);
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setInvalidRegistration(true);
      });
  };

  return (
    <div className="page-container">
      <form onSubmit={handleRegistration} className="registration-box">
        <label className="registration-label">
          USC EMAIL
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        {invalidEmail && (
          <span className="invalid-email-text">
            Please enter a valid USC email ending in @usc.edu.
          </span>
        )}
        <br />

        <label className="registration-label">
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label className="registration-label">
          CONFIRM PASSWORD
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <br />
        <button type="submit" className="registration-page-button">
          Register
        </button>
        <br />
        {invalidRegistration && (
          <span className="invalid-registration-text">
            Registration failed. Please check your input and try again.
          </span>
        )}
      </form>
    </div>
  );
}

export default Registration;
