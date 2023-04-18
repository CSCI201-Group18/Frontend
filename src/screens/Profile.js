import "./Profile.css";
import SquareButton from "../components/Buttons/SquareButton";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../components/UserContext";
import $ from "jquery";



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
      url: "http://localhost:8080/api/getUserReviews",
      method: "GET",
      dataType: "json",
      data: {
        email: email
      },
      success: function (data) {
        $("#reviewBox").html = "";
        if(data.length == 0){
          alert("You currently have not written any review!")
        }
        else{
          $.each(data, function (index, item) {
            var diningHallID = item.diningHallID;
            var diningHall = "";
            var food = item.mealName;
            var starCount = item.star;
  
            const filledStars = "★".repeat(Math.floor(starCount));
            const emptyStars = "★".repeat(Math.floor(5 - starCount));
  
            if(diningHallID === 1){
              diningHall = "USC VILLAGE DINING HALL";
            }
            else if(diningHallID === 2){
              diningHall = "PARKSIDE RESTAURANT & GRILL";
            }
            else {
              diningHall = "EVERYBODY'S KITCHEN";
            }
            
            $("#reviewBox").append(
              '<div class="reviewItem">' +
                '<div class="reviewHall">' +
                  diningHall +
                '</div>' +
                '<div class="reviewFood">' +
                  food + 
                '</div>' +
                '<div class="reviewStar">' +
                  '<span class="starStyles">'+filledStars+'</span>' +
                  '<span class="emptyStarStyles">'+emptyStars+'</span>' +
                '</div>' +
              '</div>'
            );
          });
        }
      }
    });
  };


  useEffect(() => {
    getReview();
  }, []);

  var star = 3;

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
        </div>
        <div id="homeButton">
          <SquareButton type="home" onClick={handleHome} />
        </div>
      </div>
    </>
  );
};

export default Profile;
