import React from "react";
import NavBar from "./features/utils/NavBar";
import Routes from "./features/utils/Routes";
import BgContainer from "./features/utils/BgContainer";

import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BgContainer>
        <NavBar />
        <Switch>
          <Routes />
        </Switch>
      </BgContainer>
    </BrowserRouter>
  );
}

export default App;

// TODO: There is a bug when clicking on the 'like' button on the answered questions tab on the home page - fix it.

// TODO: ensure logic for redirects is working, for example on the question answer comps

// TODO: Finish styling all components
// TODO:                      The background image doesn't enlarge to cover screen heights over h-100 - fix this.
// TODO:                      Percentage bar on Poll page doesn't show text when there are 0 answers
// TODO:                      Style Nav Links
// TODO:                      Style select dropdown on login page
// TODO:                      Logout button on Navbar
// TODO:                      Avatar alignment on all card header instances
// TODO:                      Finish off Answer component (radio buttons, layout, possibly move form into a seperate component)
// TODO:                      Organise SCSS so as to minimise the code within scss files - put into component files as much as possible.
// TODO:                      Deal with your image files: https://stackoverflow.blog/2022/03/28/picture-perfect-images-with-the-modern-element/

// TODO: Build mock API with Miragejs - you will need to use Redux middlewear to make the api calls (check redux docs) -  https://miragejs.com/docs/getting-started/introduction/
// TODO: Tests?
