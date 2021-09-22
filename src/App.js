import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginModal from './components/login/LoginModal';
import NavBar from './components/main/NavBar';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import '../src/app/styles/App.css'


function App() {

const loggedInUser = useSelector(state => state.loggedInUser[0].userName)

useEffect(() => console.log(loggedInUser))

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
                  {!loggedInUser ? <LoginModal/> : null}
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
