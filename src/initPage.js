import { initLoad } from './actions/getList';
import {connect} from 'react-redux';
import React from 'react';
import { Link} from 'react-router-dom';
import { dataStore } from './store';



class Inital extends React.Component{


    // async initLoad(){
    
    // let rsp =  await fetch("http://5e0f2c119576aa0014666435.mockapi.io/api/v1/blogs");
    //   let data =  await rsp.json();
    //   this.setState({
    //     arr1 : data,
    //   })
    
    //   }
    
    componentDidMount(){
    
         this.props.initLoaddisp();
      }
    
    
    render() {

        
 
      return (
        
    <div style={{width: "100%" , position: "absolute" , top: "15%",}} >
    
    <ul  className="listPrnt">
     {
     this.props.arr1.map( (val) => { return <DispList arr={val} ></DispList>; })
     }
    </ul>
    
    </div>
     
    );
    }
    }
    
    const mapStateToProps = state => {
       
       
      return {arr1 : state.blogList };
    };
    
    const mapDispatchToProps = dispatch => {
    return {
      initLoaddisp: ()=> dispatch(initLoad()),
    };
    };



    function DispList (props) {

        return (
        <Link to={{
          pathname: `/${props.arr.id}` ,
          state: {
            title : props.arr.title ,
            desc : props.arr.content,
          }
    
        }} className="listId" >
    
          <li style={{paddingTop: "2px" , paddingBottom: "2px",}}  >
            <h2 className="dispListTitle"  >{props.arr.title}</h2>
            <h4 className="dispListAuth"  > <b  >By  </b><i  >{props.arr.author}</i></h4>
          </li>
    
          </Link>
          
        );
    }

    
    
   
    
    export default connect(mapStateToProps,mapDispatchToProps)(Inital);