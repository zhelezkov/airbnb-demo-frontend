import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SectionMore } from '../Section';
import Card from './Card';

import private3BedrImage from './images/private3Bedr.png';
import salentinaImage from './images/salentina.png';
import dreamHouseImage from './images/dreamHouse.png';

const CardColumn = ({ children }) => (
  <Col xs={8} sm={8} md={5} lg={4}>
    {children}
  </Col>
);

export default () => (
  <SectionMore title="Homes">
    <CardColumn>
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
    </CardColumn>
    <CardColumn>
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
    </CardColumn>
    <CardColumn>
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
    </CardColumn>
  </SectionMore>
);
