import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginModal from './components/login/LoginModal';
import NavBar from './components/NavBar';
import Home from './components/Home/Home'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import '../src/app/styles/App.css'


function App() {

const loggedInUser = useSelector(state => state.loggedInUser[0].userName)

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
                  <Row className="w-100 justify-content-center">
                    {!loggedInUser ? <LoginModal /> : <Home/>}
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
