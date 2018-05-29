import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import "../stylesheets/Article-Cards.css";
import "../stylesheets/Article-List.css";
import "../stylesheets/Lightbox-Gallery.css";
 class Works extends Component {
  render() {
    return (
        <div>
        <figure class="snip1253">
        <div class="image"><img src="http://101musicalsacademy.in/wp-content/uploads/2016/05/IMG_7282-e1464516797638.jpg" alt="sample52" style={{width:440,height:250}}/></div>
        <figcaption>
          <h3>Teaching Guitar and Piano and Drums </h3>
          <p>
          I actively Teach Guitar , Piano and Drums , and also Train my Students in Composing their own Music.
          </p>
        </figcaption>
        
      </figure>
      <figure class="snip1253">
        <div class="image"><img src="liveshow.png" alt="sample52" style={{width:440,height:250}}/></div>
        <figcaption>
          <h3> Live Performances  </h3>
          <p>
            I don't need to compromise my principles, they don't have the slightest bearing on what happens to me anyway.
          </p>
        </figcaption>
        
      </figure>
      <figure class="snip1253">
        <div class="image"><img src="musicsite.png" alt="sample52" style={{width:440,height:250}}/></div>
        <figcaption>
          <h3>Launched Website 101musicalsacademy </h3>
          <p>
          This is a website of my Non Profit Music class , which was created by myself in 2015.
          </p>
          <p> <a href="http://101musicalsacademy.in/">Link to Visit website </a> </p>
        </figcaption>
        
      </figure>
      <figure class="snip1253">
        <div class="image"><img src="http://101musicalsacademy.in/wp-content/uploads/2016/05/IMG_7282-e1464516797638.jpg" alt="sample52" style={{width:440,height:250}}/></div>
        <figcaption>
          <h3>Launched Youtube Viewing App on App Store. </h3>
          <p>
          Launched many apps where the user can view the videos from their youtube channel , and promote their brand.
          </p>
          <p> <a href="https://play.google.com/store/apps/details?id=com.basiclessonsapp">Link to Download App  </a> </p>
        </figcaption>
        
      </figure>
      <figure class="snip1253 hover">
        <div class="image"><img src="live.png" alt="sample66" style={{width:440,height:250}}/></div>
        <figcaption>
          <h3>Live Performance in Thane School , Annual Day</h3>
          <p>
          Performed live at Annual Day in Junior Citizens Pre School in Thane , in front of a lot of parents and audiences.
          </p>
        </figcaption>
        
      </figure>
      <figure class="snip1253">
        <div class="image"><img src="news.png" alt="sample59" style={{width:440,height:250}}/></div>
        <figcaption>
          
          <h3>Launched News Reader App </h3>
          <p>
          A News Reader App , to read business news from india , america , England and Canada.
          </p>
          <p> <a href="https://play.google.com/store/apps/details?id=com.hnrtech.newsglobal">Link to Download App  </a> </p>
        </figcaption>
       
      </figure>
      
      </div>
    )
  }
}
export default Works;