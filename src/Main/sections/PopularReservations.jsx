import React from 'react';
import Section from '../Section';

import chumleyImage from './images/chumley.png';
import hanjanImage from './images/hanjan.png';
import primeMeatsImage from './images/primeMeats.png';
import seapriceImage from './images/seaprice.png';
import PopularReservationCard from '../cards/PopularReservationCard';

export default () => (
  <Section title="Popular Reservations around the world" seeAll>
    <PopularReservationCard
      title="Chumley's"
      image={chumleyImage}
      description="SPEAKEASY"
      price={60}
    />
    <PopularReservationCard
      title="Hanjan"
      image={hanjanImage}
      description="KOREAN GASTROPUB"
      price={50}
    />
    <PopularReservationCard
      title="Prime Meats"
      image={primeMeatsImage}
      description="GERMAN AMERICAN"
      price={55}
    />
    <PopularReservationCard
      title="Seaprice"
      image={seapriceImage}
      description="FINE SEAFOOD"
      price={70}
    />
  </Section>
);
