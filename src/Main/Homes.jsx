import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SectionMore } from './Section';
import Card from '../Homes/Card';

import mockData from '../Homes/mockData';

const Column = ({ children }) => (
  <Col xs={8} sm={8} md={5} lg={4}>
    {children}
  </Col>
);

const Homes = ({ homes }) =>
  homes.map(home => (
    <Column>
      <Card {...home} />
    </Column>
  ));

export default () => (
  <SectionMore title="Homes" link="/homes">
    <Homes homes={mockData} />
  </SectionMore>
);
