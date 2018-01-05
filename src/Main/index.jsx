import React from 'react';
import { Grid } from 'react-flexbox-grid';

import ExploreSection from './sections/Explore/index';
import ExperiencesSection from './sections/Experiences/index';
import HomesSection from './sections/Homes/index';
import PopularReservations from './sections/PopularReservations/index';
import FeaturedDestinations from './sections/FeaturedDestinations/index';

export default () => (
  <Grid>
    <ExploreSection />
    <ExperiencesSection />
    <HomesSection />
    <PopularReservations />
    <FeaturedDestinations />
  </Grid>
);
