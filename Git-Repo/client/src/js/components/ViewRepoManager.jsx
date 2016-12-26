
import React from 'react';
import FavRepoDisplay from './FavRepoDisplay.jsx';

export default class ViewRepoManager extends React.Component{
	constructor(){
		super();
		this.updateArray = this.updateArray.bind(this);		
	}
	updateArray(item){
		this.props.repoArrUpdate(item);
	}
	render(){
		console.log("Inside View Repo Manager ");
		console.log(this.props.repoArray);
		
		var arr = this.props.repoArray;
		var that = this;

		return(
			<div>
				<h4>Inside View Repo Manager</h4>
				{
          			arr.map(function(Item){
            		return(<FavRepoDisplay item={Item} fxn={that.updateArray}/>)
            		}
          			)
        		}
			</div>
		)
	}
}