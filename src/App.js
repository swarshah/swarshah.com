import React, { Component } from 'react';
import './App.css';
import Avatar from './Avatar';
import PersonalInfo from './PersonalInfo';
import SocialMedia from './SocialMedia';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar />
        <PersonalInfo />
        <SocialMedia />
      </div>
    );
  }
}

export default App;
