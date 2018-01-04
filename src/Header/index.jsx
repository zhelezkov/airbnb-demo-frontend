import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

import logo from './icons/logo.svg';
import Menu from './Menu';

const Row = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
`;

const Logo = styled.img`
  margin-left: 6.0625rem;
  margin-right: 3.1875rem;
`;

export default () => (
  <Row>
    <Logo src={logo} />
    <SearchBar />
    <Menu />
  </Row>
);
