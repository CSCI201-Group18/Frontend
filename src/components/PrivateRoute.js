import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default PrivateRoute;
