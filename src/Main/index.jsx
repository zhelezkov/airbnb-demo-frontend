import React from 'react';
import { Grid } from 'react-flexbox-grid';

import Explore from './sections/Explore';
import Experiences from './sections/Experiences';
import Homes from './sections/Homes';
import PopularReservations from './sections/PopularReservations';
import FeaturedDestinations from './sections/FeaturedDestinations';

export default () => (
  <Grid>
    <Explore />
    <Experiences />
    <Homes />
    <PopularReservations />
    <FeaturedDestinations />
  </Grid>
);
