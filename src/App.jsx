import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Main from './Main';
import Homes from './Homes';

const Content = styled.div`
  padding-top: 4.9375rem;
`;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Content>
        <Route path="/" exact component={Main} />
        <Route path="/homes" component={Homes} />
      </Content>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
