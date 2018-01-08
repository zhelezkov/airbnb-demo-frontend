import React from 'react';
import Header from './Header';
import Main from './Main';
import Homes from './Homes';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/homes" component={Homes} />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
