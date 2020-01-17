import React from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Inital from './initPage';
import './App.scss';




function App() {

  return (
    
    <div>

    <Header />

    <Router >

      <Switch >
        <Route exact path="/" component={Inital} />
        <Route path="/:id" exact component={DetailList} />
      </Switch>
  
    </Router>

    </div>
  );
}


function DetailList(props) {
    
  return (<div className="descPnl"><h1  > {props.location.state.title} </h1>
  <h3  > {props.location.state.desc} </h3> 
  </div> );
  
  }










const Header = () => {
  return (
    <div className="headerStyle">

    <h1  className="headertitle" >
    Blog list
    </h1>
  <ButtonComp ></ButtonComp>
  </div>
  );
}

 const ButtonComp = () => {
  return (
      <button id="initPageBtn" type="button"  >ADD</button>
  );
}




export default App ;
