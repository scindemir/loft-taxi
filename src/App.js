import React from 'react';
import {Home} from './Home';
import {Map} from './Map';
import {Profile} from './Profile';
import {Register} from './Register';
import './App.css';



class App extends React.Component {

  state = { currentPage: "home"};

  navigateTo = (page) => {
    this.setState({currentPage: page})
  };

  getPage = (page) => {
      const PAGES = {
      home: <Home navigateTo={this.navigateTo} />,
      map: <Map navigateTo={this.navigateTo} />,
      profile: <Profile/>,
      register: <Register navigateTo={this.navigateTo} />,
    };

    return PAGES[page];
  }

  

  render() {
    const page = this.getPage(this.state.currentPage);

    return <>
      <header className="header hidden">
      <div className="header__left">
          <img src="./pic/logoHeader.png" alt="" className="header__left-logo" />
      </div>
        <nav className="header__right">
          <ul className="header__right-list">
            <li className="header__right-item">
              <button className="header__right-link" onClick={() => {this.navigateTo("map")}}>
                Map
              </button>
            </li>
            <li className="header__right-item">
              <button className="header__right-link" onClick={() => {this.navigateTo("profile")}}>
                Profile
              </button>
            </li>
            <li className="header__right-item">
              <button className="header__right-link" onClick={() => {
                this.navigateTo("home");
                document.querySelector('.header').classList.add('hidden')}}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {page}
        </section>
      </main>
    </>;
  }
}

export default App;
