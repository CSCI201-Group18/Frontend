import React, { useState, useEffect } from "react";
import LoginBanner from "../components/LoginBanner";
import "../components/LoginBanner.css";
import StarRating from "../components/StarRating";
import "./DiningHallPageUnregistered.css";

function getMealTime() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 7 && hours < 10.5) {
    return "Today's Breakfast";
  } else if (hours >= 11 && hours < 16) {
    return "Today's Lunch";
  } else if (hours >= 16 && hours < 22) {
    return "Today's Dinner";
  } else {
    return "Closed";
  }
}

function EVKUnregistered() {
  const currentMealTime = getMealTime();
  const foodItems = [
    { name: "Spaghetti", rating: 4 },
    { name: "Chicken Parmesan", rating: 5 },
    { name: "Caesar Salad", rating: 3 },
    { name: "Steak Fajitas", rating: 4 },
    { name: "Beef Stroganoff", rating: 5 },
    { name: "Honey Glazed Ham", rating: 3 },
    { name: "Pesto Pizza", rating: 4 },
    { name: "Mushroom Risotto", rating: 5 },
    { name: "Fish and Chips", rating: 3 },
    { name: "Vegan Burger", rating: 4 },
  ];

  return (
    <>
      <div className="login-banner">
        <p>Everybody's Kitchen - {currentMealTime} </p>
      </div>

      <div className="food-list">
        <div className="food-item">
          <span className="food-avg-rating">Average</span>
        </div>

        {foodItems.map((item) => (
          <div className="food-item" key={item.name}>
            <span className="food-name">{item.name} </span>
            <span className="food-avg-rating">{item.rating}/5.0</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default EVKUnregistered;
export { getMealTime };
