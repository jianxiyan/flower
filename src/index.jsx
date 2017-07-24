import React from 'react';
import ReactDOM from 'react-dom';

// import 'antd-mobile/lib/button/style/index.css';
// import Button from 'antd-mobile/lib/button';

import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import Kong from './components/kong';
import App from './components/App';
import My from './components/My';
import Sort from './components/sort';
import Info from './components/Info';
import Serch from './components/Serch';
import Stage0 from './components/Stage0';
import Lei from './components/Lei';
import Login from './components/login';
import Dlzc from './components/dlzc';
import Register from './components/register';
import Cart from './components/cart'
import Start from './components/start';
import ProductList from './components/productList'
import Particular from './components/proticular'
import './index.less';

class Index extends React.Component {
  render() {
    return (
      <div className="body">
		      	<Stage0/>
		        <Lei/>
		      </div>
      
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Kong}>
     <IndexRoute component={Start} />
    	<Route path="/app" component={App}>
	      <IndexRoute component={Index} />
				<Route path="/home" component={Index} />      
	      <Route path="/fl" component={Sort} />
	      <Route path="/ss" component={Serch} />
	      <Route path="/cart" component={Cart} />
	      <Route path="/info" component={Info} />
	      <Route path="/productList" component={ProductList} />
	    
	      
      </Route>
      
      {localStorage.getItem('userid')? <Route path="/my" component={My} /> : <Route path="/dlzc" component={Dlzc} />}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/particular/:id" component={Particular}/>
      
    </Route>
  </Router>
, document.getElementById('example'));
