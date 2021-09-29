import React from 'react';
import './App.css';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={ProductPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
