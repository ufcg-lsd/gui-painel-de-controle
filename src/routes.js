import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={ Home } />
      </Switch>
    </BrowserRouter>
  )
}