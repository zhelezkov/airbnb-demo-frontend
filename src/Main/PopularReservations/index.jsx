import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SectionMore } from '../Section';
import Card from './Card';

import chumleyImage from './images/chumley.png';
import hanjanImage from './images/hanjan.png';
import primeMeatsImage from './images/primeMeats.png';
import seapriceImage from './images/seaprice.png';

const Column = ({ children }) => (
  <Col xs={6} sm={6} md={4} lg={3}>
    {children}
  </Col>
);

export default () => (
  <SectionMore title="Popular Reservations around the world" to="#">
    <Column>
      <Card title="Chumley's" image={chumleyImage} description="SPEAKEASY" price={60} />
    </Column>
    <Column>
      <Card title="Hanjan" image={hanjanImage} description="KOREAN GASTROPUB" price={50} />
    </Column>
    <Column>
      <Card title="Prime Meats" image={primeMeatsImage} description="GERMAN AMERICAN" price={55} />
    </Column>
    <Column>
      <Card title="Seaprice" image={seapriceImage} description="FINE SEAFOOD" price={70} />
    </Column>
  </SectionMore>
);
