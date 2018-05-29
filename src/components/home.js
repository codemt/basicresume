import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import '../stylesheets/Profile-Card-1.css';
import '../stylesheets/Profile-Card.css';
import { SocialIcon } from 'react-social-icons';
class Home extends Component {
  render() {
    return (
     <div class="profile-card">
            <div class="profile-back"></div><img class="img-circle profile-pic" src="me.jpg" />
            <h3 class="profile-name">Mithilesh Tarkar</h3>
            <p class="profile-bio">Hello , Welcome to my Website. </p>
            <p> I am an Artist , Engineer , Musician and Teacher </p>
            <ul class="social-list">
                <li> <SocialIcon url="http://twitter.com/jaketrent" /> </li>
                <li> <SocialIcon url="https://www.facebook.com/mythil.meshram" /></li>
                <li> <SocialIcon url="https://www.linkedin.com/in/mithilesh-tarkar-a54269107/" /></li>
            </ul>
    </div>
    )
  }
}
export default Home;