import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages
import PageLayout1 from '../components/layouts/page1-layout';

// Components
import ComponentListContainer from '../components/containers/component-list-container';

const Page1Route = (
    <Route path="page1">
      <Route component={PageLayout1}>
        <IndexRoute component={ComponentListContainer} />
      </Route>
    </Route>    
);

export default Page1Route;



