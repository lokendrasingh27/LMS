import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const {user}=useSelector(store=>store.auth)// check if JWT token is saved
  return user ? children : <Navigate to="/" />;
}

export default PrivateRoute;
