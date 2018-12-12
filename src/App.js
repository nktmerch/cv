import React, { Component } from 'react';
import './App.css';
import Styles from './styles.js';

class App extends Component {
  render() {
    return (
      <div style={Styles.App}>
        <div style={Styles.Title}>
          <p>(Nicholas) Kiran Merchant</p>
        </div>
        <div style={Styles.ProfilePicture}>
          <img src="/profile_picture.jpg" alt="Profile Picture" />
        </div>
        <div style={Styles.Bio}>
          <p>
            Hey it's me, Kiran Merchant. 
            And if I have one thing to say, really, truly,
            it's that A.J. (AJ) is a big &apos;ol dummy. 
            Thank you very much, please hire me. 
          </p>
        </div>
      </div>
    );
  }
}

export default App;
