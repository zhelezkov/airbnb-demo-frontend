import React from 'react';
import { Grid } from 'react-flexbox-grid';

import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import PopularReservations from './PopularReservations';
import FeaturedDestinations from './FeaturedDestinations';

export default () => (
  <Grid>
    <Explore />
    <Experiences />
    <Homes />
    <PopularReservations />
    <FeaturedDestinations />
  </Grid>
);
