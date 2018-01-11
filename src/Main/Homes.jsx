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

const Home = ({home}) => (
  <Column>
    <Card {...home} />
  </Column>
);

const Homes = ({ homes }) =>
  homes.map(home => (
    <Home home={home} key={home.id}/>
  ));

export default () => (
  <SectionMore title="Homes" to="/homes">
    <Homes homes={mockData} />
  </SectionMore>
);
