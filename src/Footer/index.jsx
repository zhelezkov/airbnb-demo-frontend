import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Selectors from './Selectors';
import Navigation from './Navigation';
import Socials from './Socials';

const Footer = styled.footer`
  font-size: 0.75rem;
  border-top: rgba(72, 72, 72, 0.3) 1px solid;
  
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default () => (
  <Footer>
    <Grid>
      <MainContent>
        <Selectors />
        <Navigation />
      </MainContent>
      <Socials />
    </Grid>
  </Footer>
);
