import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Pages from './Pages';
import Filters from '../Filters';

import mapIcon from './images/map-icon.svg';

import { retrieveHomesData } from './api';
import MapMarker from './MapMarker';

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
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: nowrap;
  color: #636363;
  margin-top: 1rem;
  margin-bottom: 1.5625rem;
`;

const MapButton = styled.button`
  appearance: none;
  border: none;
  background: none;
`;

const ContentWrapper = ({ children }) => (
  <Col xs={12} lg={8}>
    {children}
  </Col>
);

export default class ListView extends React.Component {
  state = {
    homes: null,
  };

  async componentWillMount() {
    const homes = await retrieveHomesData(0, 6);
    this.setState({ homes });
  }

  render() {
    return (
      <React.Fragment>
        <Filters />
        <Grid>
          <ContentWrapper>
            {this.state.homes && <Pages homes={this.state.homes} pages={17} />}
            <Basement>
              <p>Enter dates to see full pricing. Additional fees apply. Taxes may be added.</p>
              <MapButton className="hidden-lg hidden-xl">
                <img src={mapIcon} alt="Map button" />
              </MapButton>
            </Basement>
          </ContentWrapper>
        </Grid>
        <MapWrapper>
          <GoogleMapReact defaultCenter={{ lat: 59.95, lng: 30.33 }} defaultZoom={1}>
            {this.state.homes &&
              this.state.homes.map(home => <MapMarker lat={home.lat} lng={home.lng} />)}
          </GoogleMapReact>
        </MapWrapper>
      </React.Fragment>
    );
  }
}
