import React from 'react';

export default class UpdateButton extends React.Component{
  constructor(){
    super();
    this.State = {comments:"Default"};
    this.updateRepoFunction = this.updateRepoFunction.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.checkValue = this.checkValue.bind(this);
  }

  checkValue(event){
    var val = event.target.value;
    this.setState({comments:val});
    this.props.item.comments = val;
    console.log("updated Comment "+this.props.item.comments);
  }

  updateRepoFunction(){
     var that = this;
     console.log("inside Update Function");
     console.log(that.props.item.comments);
      $.ajax({
        url: "http://localhost:8086/repos/update",
        type: "POST",
        data : that.props.item,
        success : function(msg){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("update success");
          console.log(msg);
          that.showAlert(msg);
        },
         error: function(err){
         console.log("inside update error");
          console.log(err);
        }
    });
  }

  showAlert(msg){
    alert(msg);
  }


  render(){
  console.log("UPDATE COMPONENT");
  console.log(this.props.item);
  var itemRepo = this.props.item;
  var idRe = this.props.item._id;
  var idRepo = "#" + this.props.item._id;
    return(
      <span>
        <a href={idRepo} role="button" className="btn btn-warning" data-toggle="modal"><span className="glyphicon glyphicon-circle-arrow-up"></span> Update</a>

        <section className="modal fade" id={idRe}>
          <article className="modal-dialog">
            <section className="modal-content">

                <article className="modal-header">
                  <button className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">{itemRepo.title}</h4>
                </article>

                <article className="modal-body">
                  <img src={itemRepo.avatar_url} width="250" height="100" alt="Image of news" />
                  <hr/>
                  <form className="form-horizontal">
                    <section className="form-group">
                      <label className="col-lg-2 control-label" for="newsDescription">Name</label>
                      <article className="col-lg-10">
                        <textarea className="form-control" id="newsDescription" rows="5" disabled>{itemRepo.name}</textarea>
                      </article>
                    </section>

                    <section className="form-group">
                      <label className="col-lg-2 control-label" for="newsComments">Comments</label>
                      <article className="col-lg-10">
                        <textarea className="form-control" id="newsComments" rows="4" onChange={this.checkValue}>{itemRepo.comments}</textarea>
                      </article>
                    </section>
                  </form>
                </article>

                <article className="modal-footer">
                  <button className="btn btn-success pull-right" data-dismiss="modal" type="submit" onClick={this.updateRepoFunction}> Submit</button>
                </article>
            </section>
          </article>
        </section>
      </span>
    )
  }


}
