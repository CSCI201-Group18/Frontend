import React, { useState, useEffect } from "react";
import LoginBanner from "../components/LoginBanner";
import "../components/LoginBanner.css";
import StarRating from "../components/StarRating";
import "./DiningHallPageUnregistered.css";
import { getMealTime } from "./EVKUnregistered";
import SquareButton from "../components/Buttons/SquareButton";
import { Link } from "react-router-dom";
import $ from 'jquery';


//get all reviews for a specific dining hall
//getHallReviews - data:1
//1 - village
//2: parkside
//3: evk


function VillageUnregistered() {
  const currentMealTime = getMealTime();
  const [foodItems, setFoodItems] = useState([]);

  const getFoodItems = () => {
    let currentAvgRating = "";
    $.ajax({
    url : 'http://localhost:8080/api/getDailyMeals',
    method : "GET",
    dataType : 'json',
    async: false,
    data : {
        id : 1
    },
      success : function(data) {
        const items = data.map((item) => {
          if (item.avg_rating === 0){
            currentAvgRating = '-';
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

  /* const foodItems = [
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
  ]; */

  return (
    <>
       <div className="login-banner">
        <p>Village Dining Hall - {currentMealTime} </p>
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

export default VillageUnregistered;
