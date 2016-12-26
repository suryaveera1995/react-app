var React = require('react');
import RepoDisplay from './RepoDisplay.jsx';

export default class RepoManager extends  React.Component{

constructor(){
  super();
}


render()
{
  console.log("Repo MANAGER Array received is");
  console.log(this.props.repoArraySend);
 return(
   <div>
       {
          this.props.repoArraySend.map(function(Item){
            return(<RepoDisplay item={Item} />)
            }
          )
        }
   </div>
 );
}
}