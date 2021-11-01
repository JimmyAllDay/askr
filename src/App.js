import React from "react";

import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  // History,
} from "react-router-dom";

import LoginModal from "./components/login/LoginModal";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import Leaderboard from "./components/Leaderboard.js/Leaderboard";
import Answer from "./components/Home/Answer";
import Poll from "./components/Home/Poll";
import NotFound from "./components/Home/NotFound";

import Container from "react-bootstrap/Container";

function App() {
  const state = useSelector((state) => state);
  const loggedIn = state.loggedInUser.loggedIn;
  console.log(loggedIn);

  return (
    <BrowserRouter>
      {loggedIn ? null : <Redirect to="/" />}
      <div className="App h-100 bg-image-1">
        <NavBar {...state.loggedInUser} />
        <Container fluid className="d-flex justify-content-center">
          <Switch>
            <Route path="/add">
              <NewQuestion />
            </Route>

            <Route path="/leaderboard">
              <Leaderboard {...state} />
            </Route>

            <Route exact path="/answer/:id">
              <Answer data={state.questions} user={state.loggedInUser} />
            </Route>

            <Route exact path="/questions/:id">
              <Poll props={state.questions} user={state.loggedInUser} />
            </Route>

            <Route exact path="/">
              {loggedIn ? (
                <Home {...state} />
              ) : (
                <LoginModal props={state.users} />
              )}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
