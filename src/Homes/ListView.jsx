import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Pages from './Pages';
import Filters from '../Filters';

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

const Basement = styled(Row)`
  justify-content: center;
  color: #636363;
`;

const ContentWrapper = ({ children }) => (
  <Col xs={12} lg={8}>
    {children}
  </Col>
);

export default () => (
  <React.Fragment>
    <Filters />
    <Grid>
      <ContentWrapper>
        <Pages homes={mockData} pages={17} />
        <Basement>
          <p>Enter dates to see full pricing. Additional fees apply. Taxes may be added.</p>
        </Basement>
      </ContentWrapper>
    </Grid>
    <MapWrapper>
      <GoogleMapReact defaultCenter={{ lat: 59.95, lng: 30.33 }} defaultZoom={11} />
    </MapWrapper>
  </React.Fragment>
);
