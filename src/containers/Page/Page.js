import React, { Component } from 'react';
import Aux from './../noc/_Aux';
import Menu from './../../components/Menu/Menu';
import Author from './../../components/Author/Author';
import Blog from './../Blog/Blog';
import About from './../About/About';
import Works from './../Works/Works';
import BlogDetail from './../../components/BlogDetail/BlogDetail';
import { Route } from 'react-router-dom';
import axios from 'axios';

class Page extends Component{
	state = {
		menu: {
			items:[
				{ id:1, name: "Blog" },
				{ id:2, name: "Works"},
				{ id:3, name: "About"}
			]
		},
		auhtorInfo: {
			id: 1,
			name:"Auhot name",
			pathPic : "images/pic/my-pic.png",
			description: "Web developer"
		},
		errorServerResponseAuthor:false,
		errorServerResponseMenu:false
	};

	componentDidMount() {
		this.retriveAuthorData();
		this.retriveMenuData();
	}

	retriveAuthorData = () => {
		axios.get( 'https://writer-sample.firebaseio.com/author.json' )
			.then( response => {
			    console.log( response.data );
			    let auhtorServerInfo = response.data.map((author) =>{
			    	return author;
			    })
			    this.setState({auhtorInfo:auhtorServerInfo, errorServerResponseAuthor: false });
			} )
			.catch(error => {
			    console.log(error);
			    this.setState({ errorServerResponseAuthor: true });
		});
	}

	retriveMenuData = () => {
		axios.get( 'https://writer-sample.firebaseio.com/menu.json' )
			.then( response => {
			    console.log( response.data );
			    this.setState({menu:response.data, errorServerResponseMenu: false });
			} )
			.catch(error => {
			    console.l
			    console.log(error);
			    this.setState({ errorServerResponseMenu: true });
		});
	}

	render() {
		let authorContent = <div>Error data access</div>;

		authorContent = (
				<Author info={this.state.auhtorInfo} items={this.state.menu.items}/>
		);
		
    	return (
			<div className="row">
				<div className="col-md-3">
					{authorContent}
				</div>
				<div className="col-md-9">
					<Route path="/" exact component={Blog}/>
					<Route path="/Blog" exact component={Blog}/>
					<Route path="/Works" exact component={Works}/>
					<Route path="/About" exact component={About}/>
					<Route path="/detail/:id" exact component={BlogDetail}/>
				</div>
			</div>
    	);
  	}
} 
export default Page;