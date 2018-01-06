import React from 'react';
import { Col } from 'react-flexbox-grid';
import Section from '../Section';
import Card from './Card';

import losAngelesImage from './images/losAngeles.png';
import seoulImage from './images/seoul.png';
import tokyoImage from './images/tokyo.png';
import capeTownImage from './images/capeTown.png';
import miamiImage from './images/miami.png';
import parisImage from './images/paris.png';

const CardColumn = ({ children }) => (
  <Col xs={4} sm={4} md={3} lg={2}>
    {children}
  </Col>
);

export default () => (
  <Section title="Featured Destinations">
    <CardColumn>
      <Card title="Paris" image={parisImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Miami" image={miamiImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Tokyo" image={tokyoImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Cape town" image={capeTownImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Seoul" image={seoulImage} />
    </CardColumn>
    <CardColumn>
      <Card title="Los Angeles" image={losAngelesImage} />
    </CardColumn>
  </Section>
);
