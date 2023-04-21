import React from "react";
import EVKUnregistered from "./EVKUnregistered";
import { getMealTime } from "./EVKUnregistered";
import StarRating from "../components/StarRating";
import "./DiningHallPageRegistered.css";
import { Link } from "react-router-dom";
import "./LoginBox.css";
import { UserContext } from "../components/UserContext";
import { useContext, useEffect, useState } from "react";
import SquareButton from "../components/Buttons/SquareButton";
import $ from "jquery";


function VillageRegistered() {
  const { email } = useContext(UserContext);
  const currentMealTime = getMealTime();
  const [foodItems, setFoodItems] = useState([]);

  //review.diningHallID
  //review.mealName
  //review.star

  const getFoodItems = () => {
    $.ajax({
      url: "http://localhost:8080/api/getDailyMeals",
      method: "GET",
      dataType: "json",
      data: {
        id: 1
      },
      success: function(data){
        const items = data.map((item) => {
          let mealName = item.mealName;
          let rating = "";
          console.log(mealName);
          $.ajax({
            url: "http://localhost:8080/api/getUserReviews",
            method: "GET",
            dataType: "json",
            async: false,
            data: {
            email: {email}
          },
          success: function(data){
            const items = data.map((item) => {
              console.log(item.diningHallID)
              console.log(item.mealName)
              if (item.diningHallID === 1 && item.mealName === mealName){
                rating =  item.star;
              } 
            });
          }
         }); 
          return { name: item.mealName,rating: rating, avg: item.avg_rating };
        });
        setFoodItems(items);
      }
    });
  }

  useEffect(()=>{
    getFoodItems();
  }, []);
  

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
      <Link to="/homer">
          <SquareButton type="home" />
      </Link>
    </>
  );
}

export default VillageRegistered;
