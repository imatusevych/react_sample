import React from 'react';
/*
class Menu extends Component{

	render(){
	  	let content = (
	      this.props.items.map((item) => {
            return <div>{item.name}</div>
	      })
	    );
	   
		return(
			<div>{content}</div>
		);
	};
}
*/
/*
const menu = function (props) {
	return (
		<div>
			{
				props.items.map(function(item) {
					return (<div>{item.name}</div>);
				}
			)
		}
		</div>
	);
}
*/
const menu = (props) =>(
	<div>
	{
		props.items.map(item => (
			<div><button onClick={() => props.switchPage(item.name)}>{item.name}</button></div>
		))
	}
	</div>
);

export default menu;