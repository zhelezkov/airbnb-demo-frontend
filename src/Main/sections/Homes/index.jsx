import React from 'react';
import Section from '../../Section';
import HomeCard from './Card';

import private3BedrImage from './images/private3Bedr.png';
import salentinaImage from './images/salentina.png';
import dreamHouseImage from './images/dreamHouse.png';

export default () => (
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
