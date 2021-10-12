import React from 'react';
import Home from './Pages/Jacts/Home';
import ProductPage from './Pages/Jacts/ProductPage';
import SadBear from './Pages/SadBear/SadBear';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/product" component={ProductPage}></Route>
        <Route path="/SadBear" component={SadBear}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
