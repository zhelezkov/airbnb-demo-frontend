import React from 'react';
import { Grid } from 'react-flexbox-grid';

import ExploreSection from './sections/ExploreSection';
import ExperiencesSection from './sections/ExperiencesSection';
import HomesSection from './sections/HomesSection';
import PopularReservations from './sections/PopularReservations';

export default () => (
  <Grid>
    <ExploreSection />
    <ExperiencesSection />
    <HomesSection />
    <PopularReservations />
  </Grid>
);
