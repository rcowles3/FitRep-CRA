/* 
 * Main App Rendering React Componenets
*/

import React, { Component } from 'react';
import logo from './imgs/fitRepLogo.png';
import Navbar from './components/Navbar';
import HeaderImg from './components/HeaderImg';
import CardDeck from './components/CardDeck';
import GetStarted from './components/GetStarted';
import BacktoBasics from './components/BacktoBasics';
import Footer from './components/Footer';
// import ContactForm from './components/ContactForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeaderImg />
        <CardDeck />
        <GetStarted />
        
        {/* <ContactForm /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
