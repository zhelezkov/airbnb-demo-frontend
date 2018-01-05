import React from 'react';
import { Col } from 'react-flexbox-grid';
import Section from '../../Section';
import Card from './Card';

import bedImage from './images/bed.png';
import experiencesImage from './images/ship.png';
import restaurantsImage from './images/restaurant.png';

const CardColumn = ({ children }) => (
  <Col xs={6} md={5} lg={4}>
    {children}
  </Col>
);

export default () => (
  <Section title="Explore Airbnb">
    <CardColumn>
      <Card title="Homes" image={bedImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Experiences" image={experiencesImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Restaurants" image={restaurantsImage} />
    </CardColumn>
  </Section>
);