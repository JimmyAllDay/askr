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
      <PrivateRoute
        path="/answer/:id"
        component={() => <Wrapper name={"Answer"} component={<Answer />} />}
      />

      <PrivateRoute
        path="/questions/:id"
        component={() => <Wrapper name={"Poll"} component={<Poll />} />}
      />

      <PrivateRoute
        path="/add"
        component={() => (
          <Wrapper name={"New Question"} component={<NewQuestion />} />
        )}
      />

      <PrivateRoute
        path="/leaderboard"
        component={() => (
          <Wrapper name={"Leaderboard"} component={<Leaderboard />} />
        )}
      />

      <PrivateRoute
        exact
        path="/"
        component={() => <Wrapper name={"Questions"} component={<Home />} />}
      />

      <Route exact path="/login">
        <Wrapper name={"Log In"} component={<LoginModal />} />
      </Route>

      <PrivateRoute
        path="*"
        component={() => (
          <Wrapper name={"Not Found"} component={<NotFound />} />
        )}
      />
    </Switch>
  );
}
