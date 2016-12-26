var React = require('react');
import SaveButton from './SaveButton.jsx';
export default class NewsDisplay extends  React.Component{

render()
{
console.log("Repo DISPLAY");
console.log(this.props.item);
var repoItem = this.props.item;

 return(
   <div className="news-display jumbotron">
    <section>
      <section className = "row">
        <article className = "col-sm-4">
          <img src={this.props.item.owner.avatar_url} height = "300" width = "300" />
        </article>
        <article className = "col-sm-8">
          <h2>{this.props.item.name} </h2>
          <h2>Full Name : {this.props.item.full_name} </h2>
          <h4>html_url : {this.props.item.html_url}</h4>
          <h4>ssh : {this.props.item.ssh_url}</h4>
          <h5>Clone Url : {this.props.item.clone_url}</h5>
          <h2><b>Language {this.props.item.language}</b></h2>
          <SaveButton item={this.props.item}/>
        </article>
      </section>
    </section>
  </div>
 );
}
}
