import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './lib/AuthProvider';

import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

import Profile from './pages/Profile.js';
import ProfileGroups from './pages/ProfileGroups';
import ProfileDecks from './pages/ProfileDecks';
import SingleDeck from './pages/SingleDeck';

import CreateCard from './pages/CreateCard';
import CreateGroup from './pages/CreateGroup';
import CreateGroupSuccess from './pages/CreateGroupSuccess';
import JoinGroup from './pages/JoinGroup';
import SingleGroup from './pages/SingleGroup';

class App extends Component {
  render () {
    return (
      <AuthProvider>

        <Switch>

          <AnonRoute exact path="/" component={Homepage} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/profile/me" component={Profile} />
          <PrivateRoute exact path="/profile/me/groups" component={ProfileGroups} />
          <PrivateRoute exact path="/profile/me/decks" component={ProfileDecks} />
          <PrivateRoute exact path="/profile/me/decks/:id" component={SingleDeck} />

          <PrivateRoute exact path="/group/add-group" component={CreateGroup} />
          <PrivateRoute exact path="/group/add-group-success" component={CreateGroupSuccess} />
          <PrivateRoute exact path="/group/join-group" component={JoinGroup} />
          <PrivateRoute exact path="/group/:id" component={SingleGroup} />
          <PrivateRoute exact path="/group/:id/new-card" component={CreateCard} />

          <Route path="/**" component={ErrorPage}/>
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;
