import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import PopularReservations from './PopularReservations';
import FeaturedDestinations from './FeaturedDestinations';
import Footer from './Footer';

const Main = styled.main`
  margin-top: 3rem;
`;

export default () => (
  <React.Fragment>
    <Main>
      <Grid>
        <Explore />
        <Experiences />
        <Homes />
        <PopularReservations />
        <FeaturedDestinations />
      </Grid>
    </Main>
    <Footer />
  </React.Fragment>
);
