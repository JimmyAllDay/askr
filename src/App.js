import React from "react";

import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginModal from "./components/login/LoginModal";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import Leaderboard from "./components/Leaderboard.js/Leaderboard";
import Answer from "./components/Home/Answer";
import Poll from "./components/Home/Poll";

import Container from "react-bootstrap/Container";

import "../src/app/styles/App.css";

function App() {
  const state = useSelector((state) => state);

  return (
    <Router>
      {state.loggedInUser.loggedIn ? null : <Redirect to="/" />}
      <div className="App">
        <NavBar {...state.loggedInUser} />
        <Container fluid className="d-flex justify-content-center">
          <Switch>
            <Route path="/add">
              <NewQuestion />
            </Route>

            <Route path="/leaderboard">
              <Leaderboard />
            </Route>

            <Route exact path="/answer/:id">
              <Answer data={state.questions} user={state.loggedInUser} />
            </Route>

            <Route exact path="/questions/:id">
              <Poll props={state.questions} />
            </Route>

            <Route exact path="/">
              {state.loggedInUser.loggedIn ? (
                <Home {...state} />
              ) : (
                <LoginModal props={state.users} />
              )}
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
