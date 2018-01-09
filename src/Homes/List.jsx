import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import chunk from 'lodash/chunk';

import Filters from '../Filters';
import Card from './Card';

import mockData from './mockData';

const MapWrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    width: 34%;
    height: calc(100% - 8.5rem);
    right: 0;
    bottom: 0;
  }
`;

const HomesRow = styled(Row)`
  margin-bottom: 2.5rem;
`;

const Column = ({children}) => (
  <Col xs={12} md={6} lg={4}>
    {children}
  </Col>
);

const Page = ({ homes, rowSize = 2 }) =>
  chunk(homes, rowSize).map((row, index) => (
    <HomesRow key={index}>
      {row.map(home => (
        <Column key={home.id}>
          <Card {...home} />
        </Column>
      ))}
    </HomesRow>
  ));

export default () => (
  <React.Fragment>
    <Filters />
    <Grid>
      <Page homes={mockData} />
    </Grid>
    <MapWrapper>
      <GoogleMapReact defaultCenter={{ lat: 59.95, lng: 30.33 }} defaultZoom={11} />
    </MapWrapper>
  </React.Fragment>
);
