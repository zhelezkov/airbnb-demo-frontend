import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import chunk from 'lodash/chunk';

import Filters from '../Filters';
import Card from './Card';

import mockData from './mockData';

const MapWrapper = styled.div`
  position: fixed;
  width: 300px;
  height: calc(100% - 8.5rem);
  right: 0;
  bottom: 0;
`;

const HomesRow = styled(Row)`
  margin-bottom: 2.5rem;
`;

const Page = ({ homes, rowSize = 2 }) =>
  chunk(homes, rowSize).map(row => (
    <HomesRow>
      {row.map(home => (
        <Col lg={4}>
          <Card {...home} />
        </Col>
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
