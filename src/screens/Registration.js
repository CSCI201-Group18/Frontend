import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidRegistration, setInvalidRegistration] = useState(false);
  const [username, setUsername] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setUsername(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setInvalidRegistration(true);
      return;
    }

    if (!email.endsWith("@usc.edu")) {
      setInvalidEmail(true);
      return;
    }

    fetch("http://localhost:8080/api/addUser/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setInvalidRegistration(false);
          navigate("/profile");
        } else {
          setInvalidRegistration(true);
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
