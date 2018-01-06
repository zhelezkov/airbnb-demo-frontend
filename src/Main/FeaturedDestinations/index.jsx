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

const Column = ({ children }) => (
  <Col xs={4} sm={4} md={3} lg={2}>
    {children}
  </Col>
);

export default () => (
  <Section title="Featured Destinations">
    <Column>
      <Card title="Paris" image={parisImage} />
    </Column>
    <Column>
      <Card title="Miami" image={miamiImage} />
    </Column>
    <Column>
      <Card title="Tokyo" image={tokyoImage} />
    </Column>
    <Column>
      <Card title="Cape town" image={capeTownImage} />
    </Column>
    <Column>
      <Card title="Seoul" image={seoulImage} />
    </Column>
    <Column>
      <Card title="Los Angeles" image={losAngelesImage} />
    </Column>
  </Section>
);
