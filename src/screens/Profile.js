import "./Profile.css";
import SquareButton from "../components/Buttons/SquareButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';



const Profile = () => {
  const navigate = useNavigate();
  const { email } = useContext(UserContext);

  const handleLogout = () => {
    navigate("/");
  };

  const handleHome = () => {
    navigate("/homer");
  };


  const getReview = () => {
    $.ajax({
      url: "",
      method: "GET",
      dataType: "json",
      data: {
        userEmail: ""
      },
      success: function(data){
        $.each(data, function(index, item){
          var date = item.date;
          var dinningHall = item.dinningHall;
          var food = item.food;
          var star = item.star;

          $('#reviewBox').append(
            '<div class="reviewItem">'+
              '<div class="reviewDate">'+date+'</div>'+
              '<div class="reviewHall">'+dinningHall+'</div>'+
              '<div class="reviewFood">'+food+'</div>'+
              '<div class="reviewStar">'+star+'</div>'+
            '</div>'
          )
        })
      }
    })
  }

  return (
    <>
      <div id="body-grid-container">
        <div id="left-banner">
          <img id="profile-pic" src="/profile.png" alt="profile-pic" />
          <button class="email-background" id="banner-icon-1">
            {"EMAIL"}
          </button>
          <button
            class="button-background"
            id="banner-icon-2"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        <div id="reviewBox">
          <div class="reviewItem">
            <div class="reviewDate">{"DATE"}</div>
            <div class="reviewHall">{"DINNING-HALL"}</div>
            <div class="reviewFood">{"FOOD-ITEM"}</div>
            <div class="reviewStar">{"STARS"}</div>
          </div>
          <div class="reviewItem"></div>
          <div class="reviewItem"></div>
          <div class="reviewItem"></div>
          <div class="reviewItem"></div>
          <div class="reviewItem"></div>
          <div class="reviewItem"></div>
          <div class="reviewItem"></div>
        </div>
        <div id="homeButton">
          <SquareButton type="home" onClick={handleHome} />
        </div>
      </div>
    </>
  );
};

export default Profile;
