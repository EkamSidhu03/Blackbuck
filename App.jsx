// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import OrderPage from './containers/OrderPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/orders" component={OrderPage} />
      </Switch>
    </Router>
  );
}

export default App;
