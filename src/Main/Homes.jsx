import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SectionMore } from './Section';
import Card from '../Homes/Card';

import private3BedrImage from '../Homes/images/private3Bedr.png';
import salentinaImage from '../Homes/images/salentina.png';
import dreamHouseImage from '../Homes/images/dreamHouse.png';

const Column = ({ children }) => (
  <Col xs={8} sm={8} md={5} lg={4}>
    {children}
  </Col>
);

export default () => (
  <SectionMore title="Homes">
    <Column>
      <Card
        title="La Salentina, see, nature & relax"
        image={salentinaImage}
        price={82}
        houseType="Entire house"
        bedsCount={9}
        reviewsCount={97}
        rating={5}
        hostType="Superhost"
      />
    </Column>
    <Column>
      <Card
        title="Your private 3 bedr. riad and exclusive"
        image={private3BedrImage}
        price={82}
        houseType="Entire house"
        bedsCount={5}
        reviewsCount={161}
        rating={5}
        hostType="Superhost"
      />
    </Column>
    <Column>
      <Card
        title="Dreamy Tropical Tree House"
        image={dreamHouseImage}
        price={69}
        houseType="Entire treehouse"
        bedsCount={1}
        reviewsCount={364}
        rating={5}
        hostType="Superhost"
      />
    </Column>
  </SectionMore>
);
