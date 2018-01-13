import React from 'react';
import styled from 'styled-components';
import { Grid, Row as BasicRow } from 'react-flexbox-grid';
import DatePicker from './DatePicker';
import { MenuButton } from './styled';

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
  <Row>
    <MenuButton>Guests</MenuButton>
    <MenuButton className="hidden-xs hidden-sm hidden-md">Room type</MenuButton>
    <MenuButton className="hidden-xs hidden-sm hidden-md">Price</MenuButton>
    <MenuButton className="hidden-xs hidden-sm hidden-md">Instant book</MenuButton>
    <MenuButton>More filters</MenuButton>
  </Row>
);

class Filters extends React.Component {
  state = {
    startDate: null,
    endDate: null
  };

  onDatesSave = (startDate, endDate) => {
    if (!startDate || !endDate) return;
    console.log(`Dates saved! start date: ${startDate.format()}, end date: ${endDate.format()}`);
    this.setState({ startDate, endDate });
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <DatePicker onDatesSave={this.onDatesSave} />
            <FakeButtons />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Filters;
