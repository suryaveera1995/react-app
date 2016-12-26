import React from 'react';

export default class Search extends React.Component{

constructor(){
super();
this.userdata=this.userdata.bind(this);
this.starreddata=this.starreddata.bind(this);
}


userdata(){
var userreposearch=document.getElementById('userrepo').value;
console.log("SEarched thing is "+userreposearch);
this.props.repoSearch(userreposearch);
var that = this;
$.ajax({
url: "https://api.github.com/users/"+userreposearch+"/repos",
type: "GET",
dataType:'JSON',
success : function(msg)
{
console.log("Searched Repo Successfully");
var repoArrayGot = msg;
that.props.repoArray(repoArrayGot);
},
error: function(err){
console.log("error");
console.log(err);
alert("Invalid Search");
}
});
}

starreddata(){
var userreposearch=document.getElementById('userrepo').value;
console.log("SEarched thing is "+userreposearch);
this.props.repoSearch(userreposearch);
var that = this;
$.ajax({
url: "https://api.github.com/search/repositories?q="+userreposearch+"&sort=forks&order=desc&per_page=10",
type: "GET",
dataType:'JSON',
success : function(msg)
{
console.log("Searched Repo Successfully");
var repoArrayGot = msg.items;
that.props.repoArray(repoArrayGot);
},
error: function(err){
console.log("error");
console.log(err);
alert("Invalid Search");
}
});

}

render(){
console.log("inside Search");
return(
<div className="jumbotron" style={{"margin-bottom":"100px"}}>
<div className="container">

<div className="col-md-12">
<div id="custom-search-input">

<div className="input-group col-md-12">

<input type="text" placeholder="search" id="userrepo" className="form-control input-lg"/>
<center >

<span className="input-group-btn">
<button className="btn btn-success" type="button" onClick={this.userdata} style={{"margin-top":"20px"}}>
SEARCH BY USER  <i className="glyphicon glyphicon-search"></i>
</button>

</span>
<span className="input-group-btn">
<button className="btn btn-info" type="button" onClick={this.starreddata} style={{"margin-top":"20px"}}>
SEARCH BY REPO  <i className="glyphicon glyphicon-search"></i>
</button>
</span>
</center>



</div>
</div>
</div>

</div>
</div>
)
}
}
