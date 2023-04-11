import "./App.css";

import "bootstrap";
import Home from "./screens/home";
import HomeGuest from "./screens/homeGuest";
import Profile from "./screens/Profile";
import VillageRegistered from "./components/VillageRegistered";
import VillageUnregistered from "./components/VillageUnregistered";
import ParksideRegistered from "./components/ParksideRegistered";
import ParksideUnregistered from "./components/ParksideUnregistered";
import EVKRegistered from "./components/EVKRegistered";
import EVKUnregistered from "./components/EVKUnregistered";
import LoginPage from "./components/LoginBanner";
import { Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/evku" element={<EVKUnregistered />} />
        <Route path="/evkr" element={<EVKRegistered />} />
        <Route path="/parku" element={<ParksideUnregistered />} />
        <Route path="/parkr" element={<ParksideRegistered />} />
        <Route path="/vilu" element={<VillageUnregistered />} />
        <Route path="/vilr" element={<VillageRegistered />} />
        <Route path="/homer" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/homeu" element={<HomeGuest />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
