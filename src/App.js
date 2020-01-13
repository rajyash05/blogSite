import React from 'react';
import {BrowserRouter as Router, Switch ,Route, Link} from 'react-router-dom';

import './App.scss';



function App() {

  return (
   
   
    <div>
       <Header />
    <Router >
 
    
   
  <Switch >
   <Route exact path="/" component={Inital} />
    <Route path="/about" exact component={DetailList} />
    </Switch>
  
    </Router>

    </div>
  );
}


class Inital extends React.Component{
constructor(props)
{
  super(props);
  this.state = {
    arr1: [],
  }
  this.initLoad = this.initLoad.bind(this);
}


async initLoad(){


  let rsp =  await fetch("http://5e0f2c119576aa0014666435.mockapi.io/api/v1/blogs");
  let data =  await rsp.json();
  this.setState({
    arr1 : data,
  })

  }


  componentDidMount(){

    this.initLoad();
  }


render() {

  return (

    <div style={{width: "100%" , position: "absolute" , top: "15%",}} >


<ul  className="listPrnt">
 {
 this.state.arr1.map( (val) => { return <DispList arr={val} ></DispList>; })
 }
</ul>

  </div>
 
);
}
}


const Header = () => {
  return (
    <div className="headerStyle">
    <h1  className="headertitle"   >
    Blog list
    </h1>
  
  </div>
  );
}


function DispList (props) {

    return (
    <Link to={{
      pathname: "/about" ,
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

function DetailList(props) {


  
return (<div className="descPnl"><h1  > {props.location.state.title} </h1>
<h3  > {props.location.state.desc} </h3> 
</div> );

}

export default App;
