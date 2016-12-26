var React = require('react');
var {Link} = require('react-router');
export default class NavbarComponent extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link></li>
           <li><Link to="/saveRepo"><span className="glyphicon glyphicon-tag"></span> Saved Repos</Link></li>
           <li><Link to="/contact"><span className="glyphicon glyphicon-phone-alt"></span> Contact Us</Link></li>
           <li><Link to="/about"><span className="glyphicon glyphicon-tasks"></span> About Us</Link></li>
           <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
           <li><Link to="/register"><span className="glyphicon glyphicon-plus-sign"></span> Signup</Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
