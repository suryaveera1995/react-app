import React from 'react';

export default class DeleteButton extends React.Component{
	constructor(){
		super();
		this.deleteRepoFunction = this.deleteRepoFunction.bind(this);
    this.showAlert = this.showAlert.bind(this);
	}

	deleteRepoFunction(){
     var that = this;
      $.ajax({
        url: "http://localhost:8086/repos/delete",
        type: "DELETE",
        data : that.props.item,
        success : function(msg){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("delete success");
          that.props.functionUpdate(that.props.item);
          console.log(msg);
          that.showAlert(msg);
        },
         error: function(err){
         console.log("inside delete error");
          console.log(err);
        }
    });
  }

  showAlert(msg){
    alert(msg);
  }


	render(){
		console.log("inside delete component");
		console.log(this.props);
		return(
			<span>
				<button className="btn btn-danger" onClick={this.deleteRepoFunction}>Delete <span className="glyphicon glyphicon-trash"></span></button>
			</span>
		)
	}


}
