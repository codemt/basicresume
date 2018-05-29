import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/Dynamically-Queue-Videos.css';
 class Videos extends Component {
  render() {
    return (
        <div>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HN-jNQu5dgA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
         </div>
    
        <div className="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K8KVEWLXtJQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2ziTEEkb0ws" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        
  </div>        
       
    )
  }
}
export default Videos;