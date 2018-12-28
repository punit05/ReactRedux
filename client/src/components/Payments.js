import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
 import * as actions from '../actions';
class Payments extends Component {
    render() {
       // debugger; //for returning js code
        return (        
           <StripeCheckout
           name="Emaily"
           description="$5 for 5 email"
           amount={500}
           token={token=>this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}//it is expecting to recive a callback function
        >
        <button className="btn">
        Add Credits
        </button>
        </StripeCheckout>
            
        );
    }
}
//import StripeChecout from react-stripe-checkout;

export default connect(null,actions) (Payments);