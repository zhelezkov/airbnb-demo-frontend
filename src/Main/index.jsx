import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Section from './Section';
import ExploreCard from './cards/ExploreCard';
import ExperienceCard from './cards/ExperienceCard';
import HomeCard from './cards/HomeCard';

import bedImage from './images/bed.png';
import experiencesImage from './images/ship.png';
import restaurantsImage from './images/restaurant.png';

import forestImage from './images/forest.png';
import whaleImage from './images/whale.png';
import mountainsImage from './images/mountains.png';
import salsaImage from './images/dance.png';

import private3BedrImage from './images/private3Bedr.png';
import salentinaImage from './images/salentina.png';
import dreamHouseImage from './images/dreamHouse.png';

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

const HomesSection = () => (
  <Section title="Homes" seeAll>
    <HomeCard
      title="La Salentina, see, nature & relax"
      image={salentinaImage}
      price={82}
      houseType="Entire house"
      bedsCount={9}
      reviewsCount={97}
      rating={5}
      hostType="Superhost"
    />
    <HomeCard
      title="Your private 3 bedr. riad and exclusive"
      image={private3BedrImage}
      price={82}
      houseType="Entire house"
      bedsCount={5}
      reviewsCount={161}
      rating={5}
      hostType="Superhost"
    />
    <HomeCard
      title="Dreamy Tropical Tree House"
      image={dreamHouseImage}
      price={69}
      houseType="Entire treehouse"
      bedsCount={1}
      reviewsCount={364}
      rating={5}
      hostType="Superhost"
    />
  </Section>
);

export default () => (
  <Grid>
    <ExploreSection />
    <ExperiencesSection />
    <HomesSection />
  </Grid>
);
