import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

function PrivateRoute({ path, element }) {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;
