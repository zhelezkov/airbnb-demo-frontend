import React from 'react';
import Section from '../Section';

import forestImage from './images/forest.png';
import whaleImage from './images/whale.png';
import mountainsImage from './images/mountains.png';
import salsaImage from './images/dance.png';
import ExperienceCard from '../cards/ExperienceCard';

export default () => (
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
