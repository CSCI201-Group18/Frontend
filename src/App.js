import "./App.css";

import "bootstrap";
import Home from "./screens/home";
import HomeGuest from "./screens/homeGuest";
import Profile from "./screens/Profile";
import VillageRegistered from "./screens/VillageRegistered";
import VillageUnregistered from "./screens/VillageUnregistered";
import ParksideRegistered from "./screens/ParksideRegistered";
import ParksideUnregistered from "./screens/ParksideUnregistered";
import EVKRegistered from "./screens/EVKRegistered";
import EVKUnregistered from "./screens/EVKUnregistered";
import LoginPage from "./screens/LoginPage";
import { Router, Route, Routes } from "react-router-dom";
import Registration from "./screens/Registration";
import NewRating from "./screens/NewRating";
import { useState } from "react";
import { UserProvider } from "./components/UserContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/evku" element={<EVKUnregistered />} />
        <Route
          path="/evkr"
          element={
            <PrivateRoute>
              <EVKRegistered />{" "}
            </PrivateRoute>
          }
        />
        <Route path="/parku" element={<ParksideUnregistered />} />
        <Route
          path="/parkr"
          element={
            <PrivateRoute>
              <ParksideRegistered />
            </PrivateRoute>
          }
        />
        <Route path="/vilu" element={<VillageUnregistered />} />
        <Route
          path="/vilr"
          element={
            <PrivateRoute>
              <VillageRegistered />
            </PrivateRoute>
          }
        />
        <Route
          path="/homer"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/homeu" element={<HomeGuest />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/newrating"
          element={
            <PrivateRoute>
              <NewRating />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
