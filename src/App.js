import React from 'react';
import LoginModal from './components/login/LoginModal';
import NavBar from './components/main/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container'

import '../src/app/styles/App.css'


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Container className=''>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <LoginModal/>
                </React.Fragment>
              )}
            />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
