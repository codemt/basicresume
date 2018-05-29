import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import { BrowserRouter as Router, Route , NavLink } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">MT</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink to="/">
              <a className="nav-link" href="#">About Me  <span class="sr-only">(current)</span></a>
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/services">
              <a className="nav-link" href="#">My Services </a>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/works">
              <a className="nav-link" href="#">My Works </a>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/videos">
              <a className="nav-link" href="#">My Videos </a>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/request">
              <a className="nav-link" href="#">Request A Quote</a>
            </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" /> */}
            {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
    )
  }
}
export default NavBar;