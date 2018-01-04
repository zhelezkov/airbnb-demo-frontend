import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Section from './Section';
import Card from './Card';

import bedImage from './images/bed.png';
import experiencesImage from './images/ship.png';
import restaurantsImage from './images/restaurant.png';

const ExploreSection = () => (
  <Section title="Explore Airbnb">
    <Card title="Homes" image={bedImage} />
    <Card title="Experiences" image={experiencesImage} />
    <Card title="Restaurants" image={restaurantsImage} />
  </Section>
);

const ExperiencesSection = () => (
  <Section title="Experiences">
  </Section>
);

export default () => (
  <Grid>
    <ExploreSection />
    <ExperiencesSection />
  </Grid>
);
