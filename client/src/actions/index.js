import axios from 'axios';//axios for ajax request
import {FETCH_USER } from './types';

// export const fetchUser = () =>{
//     return function(dispatch){

    
//     axios
//     .get('/api/current_user')
//     .then(res=>dispatch({type:FETCH_USER,payload:res}))
//  };
// };
//or
export const fetchUser = () =>async (dispatch)=>{       
        const res=await axios.get('/api/current_user')
    dispatch({type:FETCH_USER,payload:res.data})//because vo only care about data;
     };

export const handleToken=(token)=>async dispatch=>{
   const res=await axios.post('/api/stripe',token);
 dispatch({type:FETCH_USER,payload:res.data}) 
};