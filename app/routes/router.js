import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Home
import MainLayout from '../components/layouts/main-layout';
import Home from '../components/views/home';
//Pages
import page1Route from './route-page1';
import page2Route from './route-page2';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      {page1Route}
      {page2Route}
    </Route>
  </Router>
);
