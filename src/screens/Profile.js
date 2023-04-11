import './Profile.css'
import './Buttons/RecButton'
import './Buttons/SquareButton'
import { useNavigate } from 'react-router-dom';
import SquareButton from './Buttons/SquareButton';

const Profile = () => {

  const navigate = useNavigate();
  const redirect = () => {
    // feed in the redirect destination
    navigate("/testHomePage");
  }



  return (
    <>
        <div id='body-grid-container'>
            <div id='left-banner'>
                <img id='profile-pic' src='/profile.png' alt='profile-pic'/>
                <button class='button-background' id='banner-icon-1'>{"EMAIL"}</button>
                <button class='button-background' id='banner-icon-2' onClick={redirect}>LOGOUT</button>
            </div>
            <div id='reviewBox'>
              <div class='reviewItem'>
                <div class='reviewDate'>{"DATE"}</div>
                <div class='reviewHall'>{"DINNING-HALL"}</div>
                <div class='reviewFood'>{"FOOD-ITEM"}</div>
                <div class='reviewStar'>{"STARS"}</div>
                <div class='tagGrid'>
                  <div class='tag'>{"THIS FOOD SUCKS"}</div>
                  <div class='tag'>{"THIS FOOD SUCKS"}</div>
                  <div class='tag'>{"THIS FOOD SUCKS"}</div>
                  <div class='tag'>{"THIS FOOD SUCKS"}</div>
                  <div class='tag'>{"THIS FOOD SUCKS"}</div>
                </div>
              </div>
              <div class='reviewItem'></div>
              <div class='reviewItem'></div>
              <div class='reviewItem'></div>
              <div class='reviewItem'></div>
              <div class='reviewItem'></div>
              <div class='reviewItem'></div>
              <div class='reviewItem'></div>
            </div>
            <div id="homeButton"><SquareButton type="home" onClick = {true}/></div>
        </div>
    </>
  )
}

export default Profile