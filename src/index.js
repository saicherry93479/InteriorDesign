import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Products from './Components/Products';
import Data from './Components/ProductsData'
import ProductItem from './Components/ProductItem';




ReactDOM.render(
     <React.StrictMode>
     <Router >
         <Switch>
     <Route path="/" exact component={App}></Route>    
    <Route   path="/signin"  component={SignIn}></Route>
    <Route  path="/signup" component={SignUp}></Route>
    <Route path="/products" component={Products}></Route>
    {
        Data.map((dataItem,index)=><Route path={`/product${dataItem.index}`} component={()=><ProductItem value={dataItem.index}></ProductItem>} key={index}></Route>
        )

  
    
    }
    
    </Switch>
    </Router>
     </React.StrictMode>

 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
