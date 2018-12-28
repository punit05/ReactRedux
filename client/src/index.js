//for redux site
import  'materialize-css/dist/css/materialize.min.css';//if not js file add extension
import React from 'react';
import ReactDOM from 'react-dom';
//for redux
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

const store=createStore(reducers,{},applyMiddleware(reduxThunk));


ReactDOM.render(
<Provider store={store}><App/></Provider>,
document.querySelector('#root'));
 

console.log("stripe key is",process.env.REACT_APP_STRIPE_KEY);
console.log("ENVIRONEMNT IS",process.env.NODE_ENV);