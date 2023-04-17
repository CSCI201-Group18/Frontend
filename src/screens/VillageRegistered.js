import React from "react";
import EVKUnregistered from "./EVKUnregistered";
import { getMealTime } from "./EVKUnregistered";
import StarRating from "../components/StarRating";
import "./DiningHallPageRegistered.css";
import { Link } from "react-router-dom";
import "./LoginBox.css";
import { UserContext } from "../components/UserContext";
import { useContext } from "react";

function VillageRegistered() {
  const { email } = useContext(UserContext);
  const currentMealTime = getMealTime();
  const foodItems = [
    { name: "Spaghetti", rating: 2, avg: 4 },
    { name: "Chicken Parmesan", rating: 4, avg: 5 },
    { name: "Caesar Salad", rating: 1, avg: 3 },
    { name: "Steak Fajitas", rating: 1, avg: 4 },
    { name: "Beef Stroganoff", rating: 1, avg: 5 },
    { name: "Honey Glazed Ham", rating: 1, avg: 3 },
    { name: "Pesto Pizza", rating: 1, avg: 4 },
    { name: "Mushroom Risotto", rating: 1, avg: 5 },
    { name: "Fish and Chips", rating: 1, avg: 3 },
    { name: "Vegan Burger", rating: 1, avg: 4 },
  ];

  return (
    <>
      <div className="login-banner">
        <p>Village Dining Hall - {currentMealTime} </p>
      </div>

      <div className="food-list">
        <div className="food-item">
          <span className="food-name"></span>
          <span className="star-rating">Your Rating</span>
          <span className="food-avg-rating">Average</span>
        </div>

        {foodItems.map((item) => (
          <div className="food-item" key={item.name}>
            <span className="food-name">{item.name}</span>
            <span className="star-rating">
              <StarRating className="star-rating" rating={item.rating} />
            </span>
            <span className="food-avg-rating">{item.avg}/5.0</span>
          </div>
        ))}
      </div>
      <Link to="/newrating">
        <button className="new-rating-button">New Rating</button>
      </Link>
      <button className="arrow-button">
        <img src="/vector3.png" alt="Button icon" className="arrow-image" />
      </button>
    </>
  );
}

export default VillageRegistered;
