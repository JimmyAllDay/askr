import React from "react";
import NavBar from "./features/utils/NavBar";
import Routes from "./features/utils/Routes";

import { useSelector } from "react-redux";

import { BrowserRouter, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import { imagesArray } from "./features/utils/imagesArray";

function App() {
  const user = useSelector((state) => state.loggedInUser);

  const randomiseBg = (max) => {
    return Math.floor(Math.random() * max);
  };

  const bg = imagesArray[randomiseBg(imagesArray.length)];

  const backgroundImage = {
    background: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) no-repeat center center / cover,
  url(${bg}) no-repeat center center / cover`,
  };

  // The below needs to be used to enable re-direction
  // const { from } = location.state || { from: "/" };

  return (
    <BrowserRouter>
      <Container fluid className="p-0 h-100 App" style={backgroundImage}>
        <NavBar {...user} />
        <Switch>
          <Routes />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

//
// TODO: You need to make session state persist after refresh for redux. You can use either sessionsstorage, redux-persist or localstorage
// TODO: Create protected routes: https://joshtronic.com/2020/03/23/protected-routes-with-react-router-v5/ and https://ui.dev/react-router-tutorial
// TODO: Add redux provider component to application, to manage store https://react-redux.js.org/api/provider - check whether you're passing store down properly
// TODO: You may need to add some logic to the function that orders users on the rankings page
// TODO: There is a bug when clicking on the 'like' button on the answered questions tab on the home page - fix it.
// TODO: The background image doesn't enlarge to cover screen heights over h-100 - fix this.
// TODO: Finish styling all components
// TODO:                      Style Nav Links
// TODO:                      Style select dropdown on login page
// TODO:                      Logout button on Navbar
// TODO:                      Avatar alignment on all card header instances
// TODO: Finish off Answer component (radio buttons, layout, possibly move form into a seperate component)
// TODO: Organise SCSS so as to minimise the code within scss files - put into component files as much as possible.
// TODO: Compress image files
// TODO: Upate npm packages via npm audit fix (do this before deployment)
// TODO: Refactor reducer 'like' logic in usersSlice and questionsSlice
