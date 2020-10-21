import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar'
import Cart from './component/Cart/Cart'
import Details from './component/Details'
import Default from './component/Default'
import ProductList from './component/ProductList'
import {Switch,Route} from 'react-router-dom'
import Modal from './component/Modal'
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ProductList}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route component={Default}/> 
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
