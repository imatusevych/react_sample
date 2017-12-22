import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

const article = function (props) {
    return (    
         <div className="col-md-12 blog-post">
            <div className="post-title">
              <a href="single.html"><h1>{props.title}</h1></a>
            </div>  
            <div className="post-info">
              <span>{props.date}/ by <a href="#" target="_blank">{props.author}</a></span>
            </div>  
            <p>{props.desciption}</p>
            <Link to={props.path} className="button button-style button-anim fa fa-long-arrow-right"><span>Read More</span></Link>
        </div>
    );
}
export default article;