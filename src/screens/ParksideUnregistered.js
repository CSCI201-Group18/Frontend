import React, { useState, useEffect } from "react";
import LoginBanner from "../components/LoginBanner";
import "../components/LoginBanner.css";
import StarRating from "../components/StarRating";
import "./DiningHallPageUnregistered.css";
import { getMealTime } from "./EVKUnregistered";
import SquareButton from "../components/Buttons/SquareButton";
import { Link } from "react-router-dom";
import $ from 'jquery';

function ParksideUnregistered() {
  const currentMealTime = getMealTime();
  const [foodItems, setFoodItems] = useState([]);

  const getFoodItems = () => {
    let currentAvgRating = "";
    $.ajax({
    url : 'http://localhost:8080/api/getDailyMeals',
    method : "GET",
    dataType : 'json',
    data : {
        id : 2
    },
      success : function(data) {
        const items = data.map((item) => {
          if (item.avg_rating === 0){
            currentAvgRating = '-';
          }
          else {
            currentAvgRating = item.avg_rating;
          }
          return {name: item.mealName, rating: currentAvgRating};
        })
        setFoodItems(items);
      }
    }); 
    
  };
  useEffect(()=>{
      getFoodItems();
    }, []);

  return (
    <>
      <div className="login-banner">
        <p>Parkside Dining Hall - {currentMealTime} </p>
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
      <div className="button-container">
        <Link to="/homeu">
          <SquareButton type="home" />
        </Link>
      </div>
    </>
  );
}

export default ParksideUnregistered;
