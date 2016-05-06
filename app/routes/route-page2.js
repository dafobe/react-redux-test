import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages
import PageLayout2 from '../components/layouts/page2-layout';

// Components
import ComponentListContainer from '../components/containers/component-list-container';

const Page2Route = (
    <Route path="page2">
      <Route component={PageLayout2}>
        <IndexRoute component={ComponentListContainer}/>
      </Route>
    </Route>    
);

export default Page2Route;