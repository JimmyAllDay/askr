import React from "react";
import NavBar from "./features/utils/NavBar";
import Routes from "./features/utils/Routes";
import BgContainer from "./features/utils/BgContainer";
import Wrapper from "./features/utils/Wrapper";

import { HashRouter, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <BgContainer>
        <NavBar />
        <Switch>
          <Wrapper component={<Routes />} />
        </Switch>
      </BgContainer>
    </HashRouter>
  );
}

export default App;

// TODO: Build mock API with Miragejs - you will need to use Redux middlewear to make the api calls (check redux docs) -  https://miragejs.com/docs/getting-started/introduction/
// TODO: Tests?
// TODO: Connect to Firebase?
