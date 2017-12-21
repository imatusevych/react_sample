import React from 'react';
import { Link } from 'react-router-dom';

const menuItem = function (props) {
	return (	
		<li><Link to={props.items}>{props.items}</Link></li>
	);
}

export default menuItem;