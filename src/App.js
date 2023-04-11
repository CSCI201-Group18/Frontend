import "./App.css";

import "bootstrap";
import Home from './screens/home';
import HomeGuest from './screens/homeGuest'
import Profile from "./screens/Profile";
import VillageRegistered from "./components/VillageRegistered";
import VillageUnregistered from "./components/VillageUnregistered";
import ParksideRegistered from "./components/ParksideRegistered";
import ParksideUnregistered from "./components/ParksideUnregistered";
import EVKRegistered from "./components/EVKRegistered";
import EVKUnregistered from "./components/EVKUnregistered";
import LoginPage from "./components/LoginBanner";
import {Router, Route, Routes} from "react-router-dom";
import Profile from './screens/Profile'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/evku" component={EVKUnregistered} />
        <Route exact path="/evkr" component={EVKRegistered} />
        <Route exact path="/parku" component={ParksideUnregistered} />
        <Route exact path="/parkr" component={ParksideRegistered} />
        <Route exact path="/vilu" component={VillageUnregistered} />
        <Route exact path="/vilr" component={VillageRegistered} />
        <Route exact path="/homer" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/homeu" component={HomeGuest} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
