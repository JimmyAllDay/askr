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
import Row from 'react-bootstrap/Row'

import '../src/app/styles/App.css'


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Container className='d-flex justify-content-center'>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <Row className="">
                    <LoginModal/>
                  </Row>
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
