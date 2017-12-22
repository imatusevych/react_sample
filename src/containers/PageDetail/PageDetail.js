import React, { Component } from 'react';
import axios from 'axios';

class PageDetail extends Component{

  state = {
    pageDetail:{},
    error:false
  };

  componentDidMount() {
	  var pageKey = this.props.match.url;
      console.log ("PageDetail.js componentWillMount");
      axios.get( 'https://writer-sample.firebaseio.com/page/'+pageKey.replace("/","")+'.json' )
      .then( response => {
          const pageDetailFromServer = response.data;
          this.setState({pageDetail: pageDetailFromServer});
          //console.log( pageDetail );
      } )
      .catch(error => {
          //console.log(error);
          this.setState({error: false});
      });
  }

	render(){
		var titile = <h2>Page not available</h2>;
		var content = <div className="col-md-12 content-page">Error retrieving data from server</div>;
		if(!this.state.error){
			titile = (<h2>{this.state.pageDetail.title}</h2>);
			content = (<div className="col-md-12 content-page">{this.state.pageDetail.body}</div>);
		}

		return (
			     <div className="col-md-12 page-body">
	              <div className="row">
	                     <div className="sub-title">
	                        {titile}
	                        <a href="contact.html"><i className="icon-envelope"></i></a>
	                     </div>
                    	{content}
	              </div>
          	</div>
        );
	}
}
export default PageDetail;