import React from 'react';
import { Grid } from 'react-flexbox-grid';

import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import PopularReservations from './PopularReservations';
import FeaturedDestinations from './FeaturedDestinations';
import Footer from './Footer';

export default () => (
  <React.Fragment>
    <main>
      <Grid>
        <Explore />
        <Experiences />
        <Homes />
        <PopularReservations />
        <FeaturedDestinations />
      </Grid>
    </main>
    <Footer />
  </React.Fragment>
);
