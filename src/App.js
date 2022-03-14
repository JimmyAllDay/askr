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

import bg1 from "./assets/images/bg1.jpg";

function App() {
  const state = useSelector((state) => state);
  const { users, questions, loggedInUser } = state;
  const loggedIn = state.loggedInUser.loggedIn;

  const backgroundImage = {
    background: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
  url(${bg1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <BrowserRouter>
      {loggedIn ? null : <Redirect to="/" />}
      <Container fluid className="p-0 App h-100">
        <NavBar {...state.loggedInUser} />
        <Container
          fluid
          className="p-0 h-100 d-flex justify-content-center bg"
          style={backgroundImage}
        >
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
            <Route path="/notfound">
              <Wrapper Name={"Not Found"} Component={<NotFound />} />
            </Route>
          </Switch>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;

// TODO: There is an error that occurs when a user attempts to navigate to a page using the search bar- refer to comments from udacity
// TODO: Structure routing so that a 404 page or something similar will show when the user tries a route that doesn't exist. Note 'notfound' route path in App.js
// TODO: prevent click into component when clicking on like at a top level component
// TODO: Build out ranking functionality (as seen on leaderboard) into a component that can be used across pages (you will need to use a redux slice, I believe)
// TODO:                           further to the above, add the user's ranking to the new question page
// TODO: Add background randomiser
// TODO: Add different hamburger image to nav button
// TODO: Finish off Answer component (radio buttons, layout, possibly move form into a seperate component)
// TODO: Finish styling all components
// TODO:                      Style Nav Links
// TODO:                      Style select dropdown on login page
// TODO:                      Logout button on Navbar
// TODO:                      Avatar alignment on all card header instances
// TODO: Organise SCSS so as to minimise the code within scss files - put into component files as much as possible.
// TODO: Compress image files
// TODO: Upate npm packages via npm audit fix (do this before deployment)
// TODO: There is logic in the Answers component that should probably be put into the relevant reducers
