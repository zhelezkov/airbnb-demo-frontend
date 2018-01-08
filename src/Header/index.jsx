import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import SearchBar from './SearchBar';
import DropdownMenu from './DropdownMenu';
import Menu from './Menu';

import logo from './icons/logo.svg';

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  @media (min-width: 992px) {
    margin-right: 1rem;
  }
`;

export default () => (
  <Header>
    <Grid>
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        <DropdownMenu />
        <SearchBar />
        <Menu />
      </Wrapper>
    </Grid>
  </Header>
);
