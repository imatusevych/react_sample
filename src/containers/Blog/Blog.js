import React, { Component } from 'react';
import Article from './../../components/Article/Article';
import About from './../About/About';
import PageDetail from './../PageDetail/PageDetail';
import axios from 'axios';

class Blog extends Component {
  state = {
    artciles:[
        { id: 1, title:"title artcile 1", date: "some date 1" },
        { id: 2, title:"title artcile 2", date: "some date 2" },
        { id: 3, title:"title artcile 2", date: "some date 2" }
    ], //how to change size???
    error:false
  };

  componentWillMount() {
      console.log ("Blog.js componentWillMount");
  }

  componentDidMount() {
      console.log ("Blog.js componentWillMount");

              axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const receivedPost = posts.map((post) => {
                    return { id:post.id, title:post.title, date: "SomeDate" }
                });
                this.setState({artciles: receivedPost});
                //console.log( receivedPost );
            } )
            .catch(error => {
                //console.log(error);
            });
  }

  render() {

    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
        posts = this.state.artciles.map((post) => {
            let postDetailPath = "detail/"+post.id;
            return <Article path={postDetailPath} key={post.id} name={post.title} id={post.id}/>;
        });
    }
    return (
      <div className="col-md-12 page-body">
          <div className="row">
                 <div className="sub-title">
                    <h2>My Blog</h2>
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
