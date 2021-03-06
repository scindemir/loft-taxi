import React from 'react';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {ProfileWithAuth} from './Profile';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';




class App extends React.Component {

  render() {
    return <>
      <Switch>
        <Route exact path="/" component={HomeWithAuth} />
        <PrivateRoute path="/Map" component={Map} />
        <PrivateRoute path="/Profile" component={ProfileWithAuth} />
      </Switch>
    </>;
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
