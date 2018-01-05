import React from 'react';
import Section from '../../Section';
import FeatureCard from './Card';

import losAngelesImage from './images/losAngeles.png';
import seoulImage from './images/seoul.png';
import tokyoImage from './images/tokyo.png';
import capeTownImage from './images/capeTown.png';
import miamiImage from './images/miami.png';
import parisImage from './images/paris.png';

export default () => (
  <Section title="Explore Airbnb">
    <FeatureCard title="Paris" image={parisImage} />
    <FeatureCard title="Miami" image={miamiImage} />
    <FeatureCard title="Tokyo" image={tokyoImage} />
    <FeatureCard title="Cape town" image={capeTownImage} />
    <FeatureCard title="Seoul" image={seoulImage} />
    <FeatureCard title="Los Angeles" image={losAngelesImage} />
  </Section>
);
