import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SectionMore } from '../Section';
import Card from './Card';

import forestImage from './images/forest.png';
import whaleImage from './images/whale.png';
import mountainsImage from './images/mountains.png';
import salsaImage from './images/dance.png';

const CardColumn = ({ children }) => (
  <Col xs={6} sm={6} md={4} lg={3}>
    {children}
  </Col>
);

export default () => (
  <SectionMore title="Experiences">
    <CardColumn>
      <Card title="Forest Therapy" image={forestImage} price={29} reviewsCount={44} rating={5} />
    </CardColumn>
    <CardColumn>
      <Card title="Whale watching" image={whaleImage} price={69} reviewsCount={46} rating={5} />
    </CardColumn>
    <CardColumn>
      <Card
        title="Table Mountain Summit, Cable Car Down"
        image={mountainsImage}
        price={69}
        reviewsCount={44}
        rating={5}
      />
    </CardColumn>
    <CardColumn>
      <Card title="Salsa Night" image={salsaImage} price={50} reviewsCount={44} rating={5} />
    </CardColumn>
  </SectionMore>
);
