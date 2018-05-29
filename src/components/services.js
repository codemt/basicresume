import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import "../stylesheets/Article-Cards.css";
import "../stylesheets/Article-List.css";
 class Services extends Component {
  render() {
    return (
      <div class="article-list">
      <div class="container">
          <div class="intro">
              <h2 class="text-center"> Services I Provide </h2>
              <p class="text-center"></p>
          </div>
          <div class="row articles">
              <div class="col-md-4 col-sm-6 item">
                  <a href="#"><img class="img-responsive" src="web.jpg" style={{width:260}} /></a>
                  <h3 class="name">Web Development</h3>
                  <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a></div>
              <div
              class="col-md-4 col-sm-6 item">
                  <a href="#"><img class="img-responsive" src="http://www.w3coding.com/blog/wp-content/uploads/2018/01/mobile-app-development.jpg" style={{width:260}} /></a>
                  <h3 class="name">Mobile App Development</h3>
                  <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a></div>
          <div
          class="col-md-4 col-sm-6 item">
              <a href="#"><img class="img-responsive" src="https://soundrips.files.wordpress.com/2016/05/sound-rips-studio.jpg" style={{width:260}} /></a>
              <h3 class="name">Music and IT Training</h3>
              <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a></div>
  </div>
  </div>
  </div>
    )
  }
}
export default Services;