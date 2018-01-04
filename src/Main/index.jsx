import React from 'react';
import { Grid } from 'react-flexbox-grid';

import ExploreSection from './sections/ExploreSection';
import ExperiencesSection from './sections/ExperiencesSection';
import HomesSection from './sections/HomesSection';
import PopularReservations from './sections/PopularReservations';
import FeaturedDestinations from './sections/FeaturedDestinations';

export default () => (
  <Grid>
    <ExploreSection />
    <ExperiencesSection />
    <HomesSection />
    <PopularReservations />
    <FeaturedDestinations />
  </Grid>
);
