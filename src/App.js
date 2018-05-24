import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar  from './components/navbar';
import JumboTron from './components/jumbotron';
import Carousel from './components/carousel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <JumboTron />

      </div>
    );
  }
}

export default App;
