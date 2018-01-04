import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Section from './Section';
import ExploreCard from './cards/ExploreCard';
import ExperienceCard from './cards/ExperienceCard';

import bedImage from './images/bed.png';
import experiencesImage from './images/ship.png';
import restaurantsImage from './images/restaurant.png';

import forestImage from './images/forest.png';
import whaleImage from './images/whale.png';
import mountainsImage from './images/mountains.png';
import salsaImage from './images/dance.png';

const ExploreSection = () => (
  <Section title="Explore Airbnb">
    <ExploreCard title="Homes" image={bedImage} />
    <ExploreCard title="Experiences" image={experiencesImage} />
    <ExploreCard title="Restaurants" image={restaurantsImage} />
  </Section>
);

const ExperiencesSection = () => (
  <Section title="Experiences" seeAll>
    <ExperienceCard
      title="Forest Therapy"
      image={forestImage}
      price={29}
      reviewsCount={44}
      rating={5}
    />
    <ExperienceCard
      title="Whale watching"
      image={whaleImage}
      price={69}
      reviewsCount={46}
      rating={5}
    />
    <ExperienceCard
      title="Table Mountain Summit, Cable Car Down"
      image={mountainsImage}
      price={69}
      reviewsCount={44}
      rating={5}
    />
    <ExperienceCard
      title="Salsa Night"
      image={salsaImage}
      price={50}
      reviewsCount={44}
      rating={5}
    />
  </Section>
);

export default () => (
  <Grid>
    <ExploreSection />
    <ExperiencesSection />
  </Grid>
);
