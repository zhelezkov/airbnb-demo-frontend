import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import Selectors from './Selectors';
import Navigation from './Navigation';
import Socials from './Socials';

const Wrapper = styled(Row)`
  border-top: rgba(72, 72, 72, 0.3) 1px solid;
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
      <Row>
        <MainContent>
          <Selectors />
          <Navigation />
        </MainContent>
      </Row>
      <Row>
        <Socials />
      </Row>
    </Grid>
  </Wrapper>
);
