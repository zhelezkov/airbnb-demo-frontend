import React from 'react';
import { Route } from 'react-router-dom';
import List from './List';
import Show from './Show';

export default () => (
  <React.Fragment>
    <Route path="/homes" exact component={List} />
    <Route path="/homes/:id" exact component={Show} />
  </React.Fragment>
);
