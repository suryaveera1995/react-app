var React = require('react');
import ViewRepoManager from './ViewRepoManager.jsx';

export default class SavedRepoComponent extends  React.Component{
constructor(){
  super();
  this.state = {repo:[]};
  this.getRepoArray = this.getRepoArray.bind(this);
  this.changeRepoArray = this.changeRepoArray.bind(this);
}

changeRepoArray(item){
  var arr = this.state.repo;
  var index = arr.findIndex(x => x._id==item._id)
  console.log("index of item deleted is "+index);
  arr.splice(index,1);
  this.setState({repo:arr});
}

   getRepoArray(){
    var that = this;
    $.ajax({
       url: "http://localhost:8086/repos/view",
       type: "GET",
       success : function(msg){
       /*msg reprewsents JSON data of repo headlines sent back by external API*/
       console.log("get Repo success");
       console.log(msg);
       that.setState({repo:msg});
       },

       error: function(err){
       console.log("get Repo error");
       console.log(err);
      }
    });
  }

componentDidMount(){
  this.getRepoArray();
}

render()
{
console.log("inside favourite");
 return(
   <div className="container" id="fav">
      <h1>View
      repo Saved Before</h1>
      <ViewRepoManager repoArray={this.state.repo} repoArrUpdate = {this.changeRepoArray}/>
   </div>
 );
}
}
