import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component{
	constructor(){
		super();
		this.loginFunction = this.loginFunction.bind(this);
		this.registerUser = this.registerUser.bind(this);
	}

	loginFunction(){
		console.log("in login function");
		var username = this.refs.uname.value;
		var password = this.refs.pass.value;
		$.ajax({
	       url: "http://localhost:8086/login/login",
	       type: "POST",
	       data: 'username='+username+'&password='+password,
	       success : function(msg){
	       /*msg reprewsents JSON data of news headlines sent back by external API*/
	       console.log("in login");
	       console.log(msg);
	       console.log("login success");
	       alert("successfully logged in");
	       browserHistory.push('/home');
	       },

	       error: function(err){
	       console.log("login fail");
	       alert('check ur username and password');
	       console.log(err);
      }
	});
	}

	registerUser(){
		var Uname = this.refs.username.value;
		var Uemail = this.refs.email.value;
		var Uage = this.refs.age.value;
		var Upassword = this.refs.password.value;
		var userObject = {};
		userObject.username = Uname;
		userObject.email = Uemail;
		userObject.age = Uage;
		userObject.password = Upassword;

		$.ajax({
	       url: "http://localhost:8080/login/save",
	       type: "POST",
	       data: userObject,
	       success : function(msg){
	       /*msg reprewsents JSON data of news headlines sent back by external API*/
	       console.log("in Register");
	       console.log(msg);
	       alert("registered Successfully");
	       console.log("login success");

	       },

	       error: function(err){
	       console.log("Register fail");
	       alert('Not Registered');
	       console.log(err);
      }
	});
	}

	render(){

		return(
		<div className="container" id="home">
			<div classNameName="row">
					<div className="col-sm-6 col-md-4 col-md-offset-4">
							<h1 className="text-center login-title">Sign in to continue to githubrepo</h1>
							<div className="account-wall">
									<img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
											alt=""/>
									<form className="form-signin">
									<input type="text" ref="uname" className="form-control" placeholder="username" required autofocus/>
									<input type="password" ref="pass" className="form-control" placeholder="Password" required/>


<button type="button" className="btn btn-lg btn-primary btn-block btn-signin" onClick={this.loginFunction.bind(this)}>Login </button>

									<a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
									</form>
							</div>
							<a href="#registerModal" className="text-center new-account" data-toggle="modal">Create an account </a>
					</div>

								<section className = "modal fade" id="registerModal">
										<article className = "modal-dialog">
										<section className = "modal-content">
												<article className = "modal-header">
														<button className="close" data-dismiss="modal">&times;</button>
												<h4 className="modal-title">Register Yourself</h4>
												</article>

											<article className = "modal-body">
												<article className = "form-horizontal">
														<article className = "form-group">
																<article className = "col-lg-12 row">
																	<label className = "col-lg-4">Username </label>
																	<input type = "text" placeholder = "username" className = "col-lg-4 form-control" ref = "username"/>
																</article>
																 <br/>
																<article className = "col-lg-12 row">
																	<label className = "col-lg-4">Email </label>
																		<input type = "text" placeholder = "email" className = "col-lg-4 form-control" ref = "email"/>
																</article>
																<br/>
																<article className = "col-lg-12 row">
																	<label className = "col-lg-4">Age </label>
																	<input type = "text" placeholder = "age" className = "col-lg-4 form-control" ref = "age"/>
																</article>
																<br/>
																<article className = "col-lg-12 row">
																	<label className = "col-lg-4">Password </label>
																	<input type = "password" placeholder = "password" className = "col-lg-4 form-control" ref = "password"/>
																</article>
														</article>
												</article>
											</article>
											<article className="modal-footer">
												<input type = "submit" className = "btn btn-primary" data-dismiss = "modal" value ="Register" onClick = {this.registerUser}/>
											</article>
										</section>
								</article>
							</section>
			</div>
	</div>
		)
	}
}
