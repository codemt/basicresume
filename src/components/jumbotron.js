import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
class JumboTron extends Component {
  render() {
    return (
        <div class="jumbotron">
            <h1 class="display-3">Hello</h1>
             <p class="lead">My Name is Mithilesh Tarkar and Welcome to my website.</p>
             <hr class="my-4" />
            {/* <p>Scroll Down to know more About me..</p> */}
             {/* <p class="lead">
                 <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p> */}
        </div>
    )
  }
}
export default JumboTron;