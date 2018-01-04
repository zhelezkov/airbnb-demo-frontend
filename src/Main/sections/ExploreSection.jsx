import React from 'react';
import Section from '../Section';
import ExploreCard from '../cards/ExploreCard';

import bedImage from './images/bed.png';
import experiencesImage from './images/ship.png';
import restaurantsImage from './images/restaurant.png';

export default () => (
  <Section title="Explore Airbnb">
    <ExploreCard title="Homes" image={bedImage} />
    <ExploreCard title="Experiences" image={experiencesImage} />
    <ExploreCard title="Restaurants" image={restaurantsImage} />
  </Section>
);
