import "./App.css";

import "bootstrap";
import LoginBox from "./components/LoginBox";
import LoginBanner from "./components/LoginBanner";
import Home from "./screens/home";
import HomeGuest from "./screens/homeGuest";
import EVKUnregistered from "./components/EVKUnregistered";
import StarRating from "./components/StarRating";
import EVKRegistered from "./components/EVKRegistered";

function App() {
  return (
    <>
      <EVKRegistered />
    </>
  );
}

export default App;
