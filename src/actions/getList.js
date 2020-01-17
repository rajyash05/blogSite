import {GET_LIST} from './types';

export const passList = (list) =>
 {
    // let list = [] ;
    // fetch("http://5e0f2c119576aa0014666435.mockapi.io/api/v1/blogs")
    // .then(rsp => rsp.json())
    // .then (data => data = list);



return(
    {
        type: GET_LIST,
        payload: list,
    }
);
    
 }

 export  const initLoad = () => {
  
  

   
   return (dispatch) => { fetch("http://5e0f2c119576aa0014666435.mockapi.io/api/v1/blogs")
    .then(data => data.json())
     .then( rsp => dispatch(passList(rsp))); }
    //   return (dispatch) => {
    // return (dispatch) => 
    //    fetch("http://5e0f2c119576aa0014666435.mockapi.io/api/v1/blogs")
    //    .then(data => console.log(data.json()))
    //     .then(
    //      rsp => {dispatch(passList(rsp))});
      
        

        
    //   }
    
      }

