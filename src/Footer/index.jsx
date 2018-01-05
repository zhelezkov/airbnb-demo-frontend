import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Selectors from './Selectors';
import Navigation from './Navigation';
import Socials from './Socials';

const Wrapper = styled.div`
  border-top: rgba(72, 72, 72, 0.3) 1px solid;
  font-size: 0.75rem;
  
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <MainContent>
        <Selectors />
        <Navigation />
      </MainContent>
      <Socials />
    </Grid>
  </Wrapper>
);
