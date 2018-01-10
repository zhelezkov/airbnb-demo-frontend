import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import List from './ListView';

const Content = styled.div`
  padding-top: 5.0625rem;
`;

export default () => (
  <Content>
    <Route path="/homes" exact component={List} />
  </Content>
);
