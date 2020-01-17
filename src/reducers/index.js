
import {GET_LIST} from '../actions/types';
import {initState} from '../store';

 const reducer  = (state = initState, action) => {

  

    switch (action.type) 
    {
        case GET_LIST : return Object.assign({},state,{
            blogList: action.payload,
        })  ;
            

         default : return state ;
    }
};

export default reducer;

