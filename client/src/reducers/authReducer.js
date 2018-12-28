import {FETCH_USER} from '../actions/types';

export default function(state=null,action){
   
   //console.log(action);
    switch(action.type)
    {
        case FETCH_USER ://we will be having different return type if the person is on 3g connection it will show something different
            return action.payload || false;  //when the user is not logged in it will return empty string we have to return explicit false;
        default:return state;
    }
}