var React = require('react');
import DeleteButton from './DeleteButton.jsx';
import UpdateComponent from './UpdateComponent.jsx';

export default class FavRepoDisplay extends  React.Component{
constructor(){
  super();
  this.updateRepoArray = this.updateRepoArray.bind(this);
}

updateRepoArray(item){
  this.props.fxn(item);
}

render()
{
console.log("Fav Repo DISPLAY");
console.log(this.props.item);
var repoItem = this.props.item;
 return(
   <div className="repo-display jumbotron">
    <section>
      <section className = "row">
        <article className = "col-sm-4">
          <img src={this.props.item.avatar_url} height = "300" width = "300" />
        </article>
        <article className = "col-sm-8">
          <h1>{this.props.item.name} </h1>
          <h2>Full Name : {this.props.item.full_name} </h2>
          <h4>html_url : {this.props.item.html_url}</h4>
          <h4>ssh : {this.props.item.ssh_url}</h4>
          <h5>Clone Url : {this.props.item.clone_url}</h5>
          <h2><b>Language {this.props.item.language}</b></h2>
          <DeleteButton item={repoItem} functionUpdate={this.updateRepoArray}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <UpdateComponent item={repoItem}/>
        </article>
      </section>
    </section>
  </div>
 );
}
}
