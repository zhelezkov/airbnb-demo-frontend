import React from 'react';
import { Col } from 'react-flexbox-grid';
import Section from '../../Section';
import Card from './Card';

import chumleyImage from './images/chumley.png';
import hanjanImage from './images/hanjan.png';
import primeMeatsImage from './images/primeMeats.png';
import seapriceImage from './images/seaprice.png';

const CardColumn = ({ children }) => (
  <Col xs={6} sm={6} md={4} lg={3}>
    {children}
  </Col>
);

export default () => (
  <Section title="Popular Reservations around the world" seeAll>
    <CardColumn>
      <Card
        title="Chumley's"
        image={chumleyImage}
        description="SPEAKEASY"
        price={60}
      />
    </CardColumn>
    <CardColumn>
      <Card
        title="Hanjan"
        image={hanjanImage}
        description="KOREAN GASTROPUB"
        price={50}
      />
    </CardColumn>
    <CardColumn>
      <Card
        title="Prime Meats"
        image={primeMeatsImage}
        description="GERMAN AMERICAN"
        price={55}
      />
    </CardColumn>
    <CardColumn>
      <Card
        title="Seaprice"
        image={seapriceImage}
        description="FINE SEAFOOD"
        price={70}
      />
    </CardColumn>
  </Section>
);
