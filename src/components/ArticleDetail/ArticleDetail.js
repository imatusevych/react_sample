import React, { Component } from 'react';
import axios from 'axios';

class ArticleDetail extends Component {
  state = {
    loadedPost:"test"
  }

  componentDidUpdate () {
      if ( this.props.id ) {
          if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
              axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
                  .then( response => {
                      console.log(response);
                      this.setState( { loadedPost: response.data } );
                  } );
          }
      }
  }

  render() {
    let details = null;
    if(this.props.id > 0){
        details = <div>{this.state.loadedPost.body}</div>;
    }

    return (
          <div>
              {details}
          </div>
    );
  }
}

export default ArticleDetail;