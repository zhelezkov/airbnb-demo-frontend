import React from 'react';
import styled from 'styled-components';
import { Grid, Row as BasicRow } from 'react-flexbox-grid';
import Containers from './Containers';

const Wrapper = styled.div`
  position: fixed;
  top: 4.9675rem;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled(BasicRow)`
  flex-wrap: nowrap;
`;

class Filters extends React.Component {
  state = {
    startDate: null,
    endDate: null,

    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,

    entireHome: false,
    privateRoom: false,
    sharedRoom: false,

    minPrice: Number.NEGATIVE_INFINITY,
    maxPrice: Number.POSITIVE_INFINITY,
  };

  onDatesSave = (startDate, endDate) => {
    console.log('attempt to save date');
    if (startDate && endDate) {
      this.setState({ startDate, endDate }, () => {
        console.log(`Dates saved! start date: ${this.state.startDate.format()}, end date: ${this.state.endDate.format()}`);
      });
    }
  };

  onGuestsSave = (adultsCount, childrenCount, infantsCount) => {
    this.setState({ adultsCount, childrenCount, infantsCount }, () => {
      console.log(`Guests saved! adults count: ${this.state.adultsCount}, 
        children count: ${this.state.childrenCount}, 
        infants count: ${this.state.infantsCount}`);
    });
  };

  onRoomsSave = (entireHome, privateRoom, sharedRoom) => {
    this.setState({ entireHome, privateRoom, sharedRoom }, () => {
      console.log(`Room types saved! entire home selected: ${this.state.entireHome}, 
        private room selected: ${this.state.privateRoom}, 
        shared room selected: ${this.state.sharedRoom}`);
    });
  };

  onPriceSave = (minPrice, maxPrice) => {
    this.setState({ minPrice, maxPrice }, () => {
      console.log(`Price saved! min price: ${this.state.minPrice}, 
        max price: ${this.state.maxPrice}`);
    });
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Containers
              onDatesSave={this.onDatesSave}
              onGuestsSave={this.onGuestsSave}
              onRoomsSave={this.onRoomsSave}
              onPriceSave={this.onPriceSave}
            />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Filters;
