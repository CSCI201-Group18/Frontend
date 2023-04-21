import React from "react";
import "./LoginBox.css";
import "./NewRating.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../components/UserContext";
import DynamicStarRating from "../components/DynamicStarRating";
import { useNavigate } from "react-router-dom";
import $ from "jquery";


function NewRating() {
  const [selectedHall, setSelectedHall] = useState("");
  //const [foodItem, setFoodItem] = useState("");
  const [rating, setRating] = useState(0);

  const history = useNavigate();
  const { email } = useContext(UserContext);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleHallSelection = (hallID) => {
    setSelectedHall(hallID);

    $.ajax({
      url: "http://localhost:8080/api/getDailyMeals",
      method: "GET",
      dataType: "json",
      data: {
        id: hallID
      },
      success: function(data){
        const items = data.map((item) => {
          return { name: item.mealName };
        });
        $('#foodItemSelectBox').html("");
        $.each(items, function(index, item){
        $('#foodItemSelectBox').append(
          '<option id="test" value="'+item.name+'">'+item.name+'</option>'
          );
        });
      }
    });
  };

  const handleStarClick = (num) => {
    setRating(num);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    var foodItem = $('#foodItemSelectBox').val();
    let review = {
      reviewID: 1,
      email: email,
      diningHallID: selectedHall,
      reviewText: "",
      mealName: foodItem,
      star: rating
    }
    $.ajax({
      url: "http://localhost:8080/api/addReview",
      method: "POST",
      dataType: "text",
      contentType: "application/json",
      data: JSON.stringify(review),
      success: function(obj){
        console.log(obj);
      },
      error: function(err){
        console.log(err);
      }
    });
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
                selectedHall === 1 ? "selected" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleHallSelection(1);
              }}
            >
              Village
            </button>
            <button
              className={`hall-button ${
                selectedHall === 3 ? "selected" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleHallSelection(3);
              }}
            >
              EVK
            </button>
            <button
              className={`hall-button ${
                selectedHall === 2 ? "selected" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleHallSelection(2);
              }}
            >
              Parkside
            </button>
          </div>

          <p>Food Item:</p>
          <select id="foodItemSelectBox">
          </select>

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
