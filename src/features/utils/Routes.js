import React from "react";

import LoginModal from "../pages/pageComponents/Login";
import Home from "../pages/pageComponents/Home";
import NewQuestion from "../pages/pageComponents/NewQuestion";
import Leaderboard from "../pages/pageComponents/Leaderboard";
import Answer from "../pages/pageComponents/Answer";
import Poll from "../pages/pageComponents/Poll";
import NotFound from "../pages/pageComponents/NotFound";
import PrivateRoute from "./PrivateRoute";
import Wrapper from "./Wrapper";

import { useSelector } from "react-redux";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/answer/:id" component={() => <Answer />} />
      <PrivateRoute path="/questions/:id" component={() => <Poll />} />
      <PrivateRoute path="/add" component={() => <NewQuestion />} />
      <PrivateRoute path="/leaderboard" component={() => <Leaderboard />} />
      <PrivateRoute exact path="/" component={() => <Home />} />
      />
      <Route exact path="/login">
        <LoginModal />
      </Route>
      <PrivateRoute path="*" component={() => <NotFound />} />
    </Switch>
  );
}
