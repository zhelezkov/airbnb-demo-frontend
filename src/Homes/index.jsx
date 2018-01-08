import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import List from './List';

const Content = styled.div`
  padding-top: 3.5625rem;
`;

export default () => (
  <Content>
    <Route path="/homes" exact component={List} />
  </Content>
);
