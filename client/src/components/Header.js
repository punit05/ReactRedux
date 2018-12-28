import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
//import default from 'react-router-dom/StaticRouter';
class Header extends Component {
   //helpermethod to decide what to show
   renderContent()
   {
       switch(this.props.auth)
       {
           case null:
                return;
           case false:
                return(
                    <li><a href="/auth/google">Login With Google</a></li>
                )
           default:
                 return [
                 <li key="1"><Payments/></li>,
                 <li key="3" style={{margin:'0 10px'}}>
                 Credits:{this.props.auth.credits}
                 </li>,
                 <li key="2"><a href="/api/logout/">Logout</a></li>
       
                 ];   
                              }
   }
   
    render() {
       // console.log(this.props);
        return (
           <nav>
               <div className="nav-wrapper">
               <Link 
               to={this.props.auth ? '/surveys':'/'} 
               
               className="left brand-logo">
               Emaily
               </Link>
               <ul className="right">
                {this.renderContent()}
                   </ul>
               </div>
               </nav>

        );
    }
}
function mapStateToProps({auth})
{
    return{auth}
    //or
    //return {auth:state.auth}
}
export default connect(mapStateToProps) (Header);  