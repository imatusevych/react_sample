import React, { Component } from 'react';
import axios from 'axios';

class ArticleDetail extends Component {
  state = {
    postDetail: {},
    errorReceiveData:false
  }

  componentWillMount() {
      console.log ("BlogDetail.js componentWillMount");
  }

  componentDidMount() {
      console.log ("BlogDetail.js componentWillMount");
      console.log(this.props);
      if(this.props.match.params.id){
        axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id )
        .then( response => {
            const postDetailData = response.data;
            this.setState({postDetail: postDetailData});
            console.log ("!!Post detail Data!!");
            console.log( postDetailData );
        } )
        .catch(error => {
            this.setState({ errorReceiveData:true });
      });
      }else{
        this.setState({ errorReceiveData:true });
      }
  }

  render() {
    let content = (
      <div className="row">
         <div className="sub-title">
            <h2>Blog Detail</h2>
            <a href="contact.html"><i className="icon-envelope"></i></a>
         </div>
         <div className="col-md-12 content-page">
            Error receiving data
         </div>
       </div>
    );
    if(!this.state.errorReceiveData){
      content = (
          <div className="row">
             <div className="sub-title">
                <h2>{this.state.postDetail.title}</h2>
                <a href="contact.html"><i className="icon-envelope"></i></a>
             </div>
             <div className="col-md-12 content-page">
                {this.state.postDetail.body}
             </div>
          </div>
      );
    }
    return (
      <div className="col-md-12 page-body">
          <div className="row">
              {content}
          </div>
      </div>
    );
  }
}

export default ArticleDetail;
