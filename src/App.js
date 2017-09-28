/* 
 * Main App Rendering React Componenets
*/

import React, { Component } from 'react';
import logo from './imgs/fitRepLogo.png';
import Navbar from './components/Navbar';
import HeaderImg from './components/HeaderImg';
import CardDeck from './components/CardDeck';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeaderImg />
        <CardDeck />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
