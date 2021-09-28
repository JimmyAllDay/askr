import React from 'react';
import { useSelector} from 'react-redux';
import '../src/assets/images/avatar4.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginModal from './components/login/LoginModal';
import NavBar from './components/NavBar';
import Home from './components/Home/Home'
import NewQuestion from './components/NewQuestion/NewQuestion';
import Leaderboard from './components/Leaderboard.js/Leaderboard';

import Container from 'react-bootstrap/Container'

import '../src/app/styles/App.css'

function App() {

const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Container fluid className='d-flex justify-content-center'>
          <Switch>
            <Route exact path="/">
              {loggedInUser ? <Home/> : <LoginModal /> }
            </Route>
            <Route exact path="/new question">
              {loggedInUser ? <NewQuestion/> : <LoginModal /> }
            </Route>
            <Route path="/leaderboard">
              {loggedInUser ? <Leaderboard/> : <LoginModal /> }
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
