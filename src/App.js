import "./App.css";

import "bootstrap";
import LoginBox from "./components/LoginBox";
import LoginBanner from "./components/LoginBanner";
import Home from './screens/home';
import HomeGuest from './screens/homeGuest'

function App() {
  return (
    <>
    
      <LoginBanner />
      <div className="page-container">
        <LoginBox />
      </div>
       
       
      {/*  <Home></Home>
       <HomeGuest></HomeGuest> */}

    </>
  );
}

export default App;
