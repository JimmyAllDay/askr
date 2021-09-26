import React from 'react';
import { useSelector} from 'react-redux';

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

const loggedInUser = useSelector(state => state.loggedInUser[0].userName)

  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Container fluid className='d-flex justify-content-center'>
          <Switch>
            <Route exact path="/">
              {!loggedInUser ? <LoginModal /> : <Home/>}
            </Route>
            <Route exact path="/new question">
              <NewQuestion/>
            </Route>
            <Route path="/leaderboard">
              <Leaderboard/>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
