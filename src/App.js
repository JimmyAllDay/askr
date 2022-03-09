import React from "react";

import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  // History,
} from "react-router-dom";

import LoginModal from "./components/Pages/Login";
import NavBar from "./components/Utils/NavBar";
import Home from "./components/Pages/Home";
import NewQuestion from "./components/Pages/NewQuestion";
import Leaderboard from "./components/Pages/Leaderboard";
import Answer from "./components/Pages/Answer";
import Poll from "./components/Pages/Poll";
import NotFound from "./components/Pages/NotFound";
import Wrapper from "./components/Utils/Wrapper";

import { Container } from "react-bootstrap";

function App() {
  const state = useSelector((state) => state);
  const { users, questions, loggedInUser } = state;
  const loggedIn = state.loggedInUser.loggedIn;

  return (
    <BrowserRouter>
      {loggedIn ? null : <Redirect to="/" />}
      <Container fluid className="p-0 App h-100">
        <NavBar {...state.loggedInUser} />
        <Container fluid className="p-0 h-100 d-flex justify-content-center bg">
          {/* <BGImage /> */}
          <Switch>
            <Route path="/add">
              <Wrapper Name={"New Question"} Component={<NewQuestion />} />
            </Route>

            <Route path="/leaderboard">
              <Wrapper
                Name={"Leaderboard"}
                Component={<Leaderboard {...state} />}
              />
            </Route>

            <Route exact path="/answer/:id">
              <Wrapper
                Name={"Answer"}
                Component={<Answer data={questions} user={loggedInUser} />}
              />
            </Route>

            <Route exact path="/questions/:id">
              <Wrapper
                Name={"Poll"}
                Component={<Poll questions={questions} user={loggedInUser} />}
              />
            </Route>

            <Route exact path="/">
              {loggedIn ? (
                <Wrapper Name={"Questions"} Component={<Home {...state} />} />
              ) : (
                <Wrapper
                  Name={"Log In"}
                  Component={<LoginModal users={users} />}
                />
              )}
            </Route>
            <Route path="">
              <Wrapper Name={"Not Found"} Component={<NotFound />} />
            </Route>
          </Switch>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;

// TODO: Finish login screen
// TODO: Set up the Nav bar properly, including welcome message for logged in user
// TODO: Style New Questions page and make sure it works properly
// TODO: There is an error that occurs when a user attempts to navigate to a page - refer to comments from udacity
// TODO: Add 'A' icon to top of browser window (in the page tab for the browswer - I forget the name of the icon)
// TODO: Replace react-icons with iconify icon set, delete react icons from package.json
// TODO: On Poll page, pass subcomponent prop into card header component. Make sure prop data and logic is available.
// TODO: Finish off Answer component (radio buttons, layout, possibly move form into a seperate component)
// TODO: Build out ranking functionality (as seen on leaderboard) into a component that can be used across pages (you will need to use a redux slice, I believe)
// TODO: structure routing so that a 404 page or something similar will show when the user tries a route that doesn't exist. Note 'notfound' route path in App.js
// TODO: Get the CardLikes component working across all components in which it appears: QuestionCard, Answer
// TODO: Finish styling all components
// TODO: Upate npm packages via npm audit fix (do this before deployment)
