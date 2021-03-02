import React from 'react';
import {Header} from './Header';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {ProfileWithAuth} from './Profile';
import {withAuth} from './AuthContext';
import {Register} from './Register';
import './App.css';

const PAGES = {
    home: (props) => <HomeWithAuth {...props} />,
    map: (props) => <Map {...props} />,
    profile: (props) => <ProfileWithAuth {...props}/>,
    register: (props) => <Register {...props} />,
    };

class App extends React.Component {

  state = { currentPage: "home"};

  navigateTo = (page) => {
    if (this.props.isLoggedIn || page === "home" || page === "register") {
      this.setState({currentPage: page});
    } else {
      this.setState({currentPage: "home" });
    }
    
  };

  render() {
    return <>
      {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
    </>;
  }
}

export default withAuth(App);
