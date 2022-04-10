import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../users/loggedInSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(selectLoggedInUser);
  const userLoggedIn = loggedIn.loggedIn;

  const location = useLocation();

  return (
    <Route {...rest}>
      {userLoggedIn === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
