import React from 'react';
import { Route } from 'react-router-dom';
import List from './List';

export default () => (
  <React.Fragment>
    <Route path="/homes" exact component={List} />
  </React.Fragment>
);
