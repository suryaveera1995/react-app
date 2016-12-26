var React = require('react');
export default class SaveButton extends  React.Component{

constructor(){
  super();
  this.state = {data:"default"};
  this.saveNewsFunction = this.saveNewsFunction.bind(this);
}

saveNewsFunction(){
    console.log("inside save");
    console.log(this.props.item);
    var avatar_url=this.props.item.owner.avatar_url;
    console.log("url is "+avatar_url);

    var objSend ={};
    objSend.id = this.props.item.id;
    objSend.name = this.props.item.name;
    objSend.full_name = this.props.item.full_name;
    objSend.html_url = this.props.item.html_url;
    objSend.avatar_url = avatar_url;
    objSend.private = this.props.item.private;
    objSend.ssh_url = this.props.item.ssh_url;
    objSend.clone_url = this.props.item.clone_url;
    objSend.svn_url = this.props.item.svn_url;
    objSend.description = this.props.item.description;
    objSend.language = this.props.item.language;
    objSend.comments = "this is comment";
    var that = this;
      $.ajax({
        url: "http://localhost:8086/repos/save",
        type: "POST",
        data : objSend,
        success : function(res){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("inside save success");
          that.setState({data:res});
          console.log(res);
         that.showMessage();

        },
         error: function(err){
         console.log("inside save error");
          console.log(err);
        }
    });
  }

  showMessage(){
    alert(this.state.data);
  }

render()
{
  console.log("Save News with COMPONENT");
  console.log(this.props.item);
  return(
    <span className="save-btton block-center">
          <br/>
          <button type="button" className="btn btn-danger" onClick={this.saveNewsFunction}>Save <span className="glyphicon glyphicon-download-alt"></span></button>
       </span>
 );
}
}
