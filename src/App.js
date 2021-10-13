import React from 'react';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/product" component={ProductPage}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
