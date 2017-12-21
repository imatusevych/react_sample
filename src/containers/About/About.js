import React, { Component } from 'react';

class About extends Component{
	render(){
		return (
          <div className="col-md-12 page-body">
              <div className="row">
                     <div className="sub-title">
                        <h2>About</h2>
                        <a href="contact.html"><i className="icon-envelope"></i></a>
                     </div>
                     <div className="col-md-12 content-page">
                    	About me
                     </div>
              </div>
          </div>
		)
	}
}
export default About;