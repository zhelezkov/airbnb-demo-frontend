import React from 'react';
import { Col } from 'react-flexbox-grid';
import Section from '../../Section';
import FeatureCard from './Card';

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
  <Section title="Explore Airbnb">
    <CardColumn>
      <FeatureCard title="Paris" image={parisImage} />
    </CardColumn>
    <CardColumn>
      <FeatureCard title="Miami" image={miamiImage} />
    </CardColumn>
    <CardColumn>
      <FeatureCard title="Tokyo" image={tokyoImage} />
    </CardColumn>
    <CardColumn>
      <FeatureCard title="Cape town" image={capeTownImage} />
    </CardColumn>
    <CardColumn>
      <FeatureCard title="Seoul" image={seoulImage} />
    </CardColumn>
    <CardColumn>
      <FeatureCard title="Los Angeles" image={losAngelesImage} />
    </CardColumn>
  </Section>
);
