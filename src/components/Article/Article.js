import React,{ Component } from 'react';
import ArticleDetail from './../ArticleDetail/ArticleDetail';
import { Link } from 'react-router-dom';

class Article extends Component {
    state = {
        selectedId:0
    }

    showDetail = (id) => {
        this.setState({ selectedId:id });
    }

    render() {
        return (
             <div className="col-md-12 blog-post">
                <div className="post-title">
                  <a href="single.html"><h1>{this.props.name}</h1></a>
                </div>  
                <div className="post-info">
                  <span>17.01.2017 / by <a href="#" target="_blank">Alex Parker</a></span>
                </div>  
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique temporibus tempora dicta soluta? Qui hic, voluptatem nemo quo corporis dignissimos voluptatum debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique.</p>
                <Link to={this.props.path} className="button button-style button-anim fa fa-long-arrow-right"><span>Read More</span></Link>
            </div>
        );
    }

}
export default Article;