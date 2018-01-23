import React from 'react';
import styled from 'styled-components';
import { Grid, Row as BasicRow } from 'react-flexbox-grid';
import DatePicker from './DatePicker/index';
import { MenuButton } from './styled';
import Guests from './Guests';
import RoomsSelector from './RoomsSelector';

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
    <MenuButton className="hidden-xs hidden-sm hidden-md">Price</MenuButton>
    <MenuButton className="hidden-xs hidden-sm hidden-md">Instant book</MenuButton>
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

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <DatePicker onDatesSave={this.onDatesSave} />
            <Guests onGuestsSave={this.onGuestsSave} />
            <RoomsSelector className="hidden-xs hidden-sm hidden-md" />
            <FakeButtons />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Filters;
