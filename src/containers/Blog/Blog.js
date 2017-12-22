import React, { Component } from 'react';
import Article from './../../components/Article/Article';
import axios from 'axios';

class Blog extends Component {
  state = {
    artciles:[{
        "author": "Peter Pen",
        "date": "11 Jub 2017",
        "desciption": "Description of post 1",
        "id": 1,
        "title": "Title for posts 1"
    },
    {
        "author": "Peter Pen",
        "date": "11 Jub 2017",
        "desciption": "Description of post 1",
        "id": 2,
        "title": "Title for posts 1"
    },
        {
        "author": "Peter Pen",
        "date": "11 Jub 2017",
        "desciption": "Description of post 1",
        "id": 3,
        "title": "Title for posts 1"
    }],
    errorServerResponse:false
  };

  componentDidMount() {
      //console.log ("Blog.js componentWillMount");
      axios.get( 'https://writer-sample.firebaseio.com/posts.json' )
      .then( response => {
          this.setState({artciles: response.data});
          //console.log( receivedPost );
      } )
      .catch(error => {
          this.setState({errorServerResponse:true});
          //console.log(error);
      });
  }

  render() {
    let posts = "Something went wrong!";
    if (!this.state.errorServerResponse) {
        posts = this.state.artciles.map((post) => {
            let postDetailPath = "detail/"+post.id;
            return <Article 
                path={postDetailPath} 
                key={post.id} 
                title = {post.title} 
                author = {post.author}
                desciption = {post.desciption}
                date = {post.date}
                id={post.id}
              />;
        });
    }
    return (
      <div className="col-md-12 page-body">
          <div className="row">
                 <div className="sub-title">
                    <h2>Blog</h2>
                    <a href="contact.html"><i className="icon-envelope"></i></a>
                 </div>
                 <div className="col-md-12 content-page">
                    {posts}
                 </div>
          </div>
      </div>
    );
  }
}

export default Blog;
