import React, { Component } from 'react';
import './App.css';
import Page from './../Page/Page';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
        	<div className="container">
            	<div className="row">
            		<BrowserRouter>
						<Page/>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
