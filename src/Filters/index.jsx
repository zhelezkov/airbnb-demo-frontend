import React from 'react';
import styled from 'styled-components';
import { Grid, Row as BasicRow } from 'react-flexbox-grid';
import DatePicker from './DatePicker/index';
import { MenuButton } from './styled';
import Guests from './Guests';
import Rooms from './Rooms';
import Price from './Price';
import InstantBook from './InstantBook';

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

const FakeButtons = () => (
  <React.Fragment>
    <MenuButton>More filters</MenuButton>
  </React.Fragment>
);

class Filters extends React.Component {
  state = {
    startDate: null,
    endDate: null,

    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,

    entireHomeSelected: false,
    privateRoomSelected: false,
    sharedRoomSelected: false,
  };

  onDatesSave = (startDate, endDate) => {
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

  onRoomTypesSave = (entireHomeSelected, privateRoomSelected, sharedRoomSelected) => {
    this.setState({ entireHomeSelected, privateRoomSelected, sharedRoomSelected }, () => {
      console.log(`Room types saved! entire home selected: ${this.state.entireHomeSelected}, 
        private room selected: ${this.state.privateRoomSelected}, 
        shared room selected: ${this.state.sharedRoomSelected}`);
    });
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <DatePicker onSave={this.onDatesSave} />
            <Guests onSave={this.onGuestsSave} />
            <Rooms onSave={this.onRoomTypesSave}/>
            <Price />
            <InstantBook />
            <FakeButtons />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Filters;
