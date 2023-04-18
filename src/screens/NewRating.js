import React from "react";
import "./LoginBox.css";
import "./NewRating.css";
import { useState } from "react";
import DynamicStarRating from "../components/DynamicStarRating";
import { useNavigate } from "react-router-dom";

function NewRating() {
  const [selectedHall, setSelectedHall] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [rating, setRating] = useState(0);
  const history = useNavigate();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleHallSelection = (hall) => {
    setSelectedHall(hall);
  };

  const handleTextInput = (food) => {
    setFoodItem(food.target.value);
  };

  const handleStarClick = (num) => {
    setRating(num);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(selectedHall, foodItem, rating);
  };

  const handleXButtonClick = () => {
    history(-1);
  };

  return (
    <>
      <div className="login-banner">
        <p>New Rating </p>
        <button className="x-button" onClick={handleXButtonClick}>
          <span className="button-text">X</span>
        </button>
      </div>

      <form onSubmit={handleFormSubmission}>
        <div className="rating-menu">
          <p>Select Dining Hall:</p>
          <div className="button-container">
            <button
              className={`hall-button ${
                selectedHall === "Village" ? "selected" : ""
              }`}
              onClick={() => handleHallSelection("Village")}
            >
              Village
            </button>
            <button
              className={`hall-button ${
                selectedHall === "EVK" ? "selected" : ""
              }`}
              onClick={() => handleHallSelection("EVK")}
            >
              EVK
            </button>
            <button
              className={`hall-button ${
                selectedHall === "Parkside" ? "selected" : ""
              }`}
              onClick={() => handleHallSelection("Parkside")}
            >
              Parkside
            </button>
          </div>

          <p>Food Item:</p>
          <input
            type="text"
            value={foodItem}
            onChange={handleTextInput}
            required
            placeholder="Enter name of the item"
          />

          <div className="star-buttons">
            <label htmlFor="star-input">Select Rating:</label>
            <DynamicStarRating rating={rating} onClick={handleStarClick} />
          </div>

          <button type="submit" className="submit-rating-button">
            Submit New Rating
          </button>
        </div>
      </form>
    </>
  );
}

export default NewRating;
