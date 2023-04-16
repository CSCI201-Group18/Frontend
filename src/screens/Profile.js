import "./Profile.css";
import SquareButton from "../components/Buttons/SquareButton";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';



const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  const handleHome = () => {
    navigate('/homer');
  }


  return (
    <>
      <div id="body-grid-container">
        <div id="left-banner">
          <img id="profile-pic" src="/profile.png" alt="profile-pic" />
          <button class="email-background" id="banner-icon-1">
            {"EMAIL"}
          </button>
          <button class="button-background" id="banner-icon-2" onClick={handleLogout}>
            LOGOUT
          </button>
          
        </div>
        <div id="reviewBox">
          <div class="reviewItem">
            <div class="reviewDate">{"DATE"}</div>
            <div class="reviewHall">{"DINNING-HALL"}</div>
            <div class="reviewFood">{"FOOD-ITEM"}</div>
            <div class="reviewStar">{"STARS"}</div>
            <div class="tagGrid">
              <div class="tag">{"THIS FOOD SUCKS"}</div>
              <div class="tag">{"THIS FOOD SUCKS"}</div>
              <div class="tag">{"THIS FOOD SUCKS"}</div>
              <div class="tag">{"THIS FOOD SUCKS"}</div>
              <div class="tag">{"THIS FOOD SUCKS"}</div>
            </div>
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
            <SquareButton type="home" onClick = {handleHome}/>
        </div>
      </div>
    </>
  );
};

export default Profile;
