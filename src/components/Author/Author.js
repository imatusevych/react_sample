import React from 'react';
import MenuItem from './../MenuItems/MenuItem';
import Icon from './../Icons/Icon';
const author = (props) => (
	<div className="about-fixed">
		<div className="my-pic">
	        <img src={props.info.pathPic} alt=""/>
	        <a href="javascript:void(0)" className="collapsed" data-target="#menu" data-toggle="collapse">
	        	<i className="icon-menu menu"></i>
	        </a>
	        
	         <div id="menu" className="collapse">
	         	   <ul className="menu-link">
						{
							props.items.map(item => (
								<MenuItem key={item.id} items={item.name}/>
							))
						}
				    </ul>
	         </div>
	    </div>
		<div className="my-detail">
		        <div className="white-spacing">
		            <h1>{props.info.name}</h1>
		            <span>{props.info.description}</span>
		        </div>
		        <Icon/>
		</div>
	</div>
);
export default author;