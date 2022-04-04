import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.loggedInUser.loggedIn);

  const location = useLocation();

  return (
    <Route {...rest}>
      {loggedIn === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
