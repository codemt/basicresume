import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar  from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import Works from './components/works';
import Request from './components/request';
import Videos from './components/videos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact strict component={Home} />
        <Route path="/services" exact strict component={Services} />
        <Route path="/works" exact strict component={Works} />
        <Route path="/request" exact strict component={Request} />
        <Route path="/videos" exact strict component={Videos} />
      </div>
      </Router>
    );
  }
}

export default App;
