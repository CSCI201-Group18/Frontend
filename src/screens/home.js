import village from "./village.jpg";
import evk from "./evk.jpg";
import parkside from "./parkside.jpg";
import "./home.css";
import { useState} from "react";
import SquareButton from "../components/Buttons/SquareButton";
import RecButton from "../components/Buttons/RecButton";
import { Link } from "react-router-dom";
import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery'


function Home() {
  jQuery.extend({
    getValues: function(url) {
        var result = null;
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            async: false,
            data : {
              id: 1
            },
            success: function(data) {
              console.log(data);
                result = data.hall_id;
            }
        });
      return result;
    }
  });
  var mealID = $.getValues("http://localhost:8080/api/getHighestRated/");

  var recommendedDiningHall;
  if (mealID === 1){
    recommendedDiningHall = "Village";
  }
  else if (mealID === 2){
    recommendedDiningHall = "Parkside";
  }
  else if (mealID === 3){
    recommendedDiningHall = "EVK";
  }
  const [cards] = useState([
    {
      title: "Village",
      image: village,
      link: "/vilr",
    },
    {
      title: "EVK",
      image: evk,
      link: "/evkr",
    },
    {
      title: "Parkside",
      image: parkside,
      link: "/parkr",
    },
  ]);

  return (
    <div>
      <div className="banner">
        <h1>Your recommended dining hall for today is...</h1>
      </div>
      <div className="banner">
        <RecButton className="buttonText" type="bold" name={recommendedDiningHall}/>
      </div>
      <section>
        <div className="container">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h2>{card.title}</h2>
                <div>
                  <img src={card.image} alt={card.title} />
                </div>
                <Link to={card.link}>
                  <button className="btn">View More</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to="/profile">
            <SquareButton type="person" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
