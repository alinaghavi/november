//This component Protect a route from unAuthorized user

//Components
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "src/store/context";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const [user] = useContext(UserContext);
  const isAuthenticated = user.isLogin;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
