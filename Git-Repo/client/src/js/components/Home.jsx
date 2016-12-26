import React from 'react';

import RepoManager from './RepoManager.jsx';
import Search from './Search.jsx';

export default class Home extends React.Component{
	constructor(){
	super();
	this.state= {userSearch:"suryaveera1995", repoArray:[], starredRepo:"Default"};
	this.changeRepoArray= this.changeRepoArray.bind(this);
	this.setUserSearch = this.setUserSearch.bind(this);
	this.setStarredRepo = this.setStarredRepo.bind(this);
	}

	setUserSearch(value){
		this.setState({userSearch:value});
	}

	setStarredRepo(value){
		this.setState({starredRepo:value});
	}

	changeRepoArray(value){
		this.setState({repoArray:value});
	}

	render(){
	console.log("HOME");
	console.log("User Search");
	console.log(this.state.userSearch);
	console.log("array is :- ");
	console.log(this.state.repoArray);
		return(

		<div id="home">
			<h1 className="text-center">Search Repo</h1>
			<Search repoSearch = {this.setUserSearch} starredRepo={this.setStarredRepo} repoArray={this.changeRepoArray}/>
			<RepoManager repoArraySend={this.state.repoArray}/>
		</div>
		)
	}
}
