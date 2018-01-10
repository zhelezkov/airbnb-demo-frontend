import React from 'react';
import styled from 'styled-components';
import { Grid, Row as BasicRow } from 'react-flexbox-grid';
import DatePicker from './DatePicker';

const Wrapper = styled.div`
  position: fixed;
  top: 4.9375rem;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled(BasicRow)`
  flex-wrap: nowrap;
`;

const Button = styled.button`
  margin: 0.75rem;
  padding: 0.4375rem 1rem 0.4375rem 1rem;

  appearance: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${({ highlighted }) => (highlighted ? '#fff' : '#383838')};
  background-color: ${({ highlighted }) => (highlighted ? '#008489' : '#fff')};
  cursor: pointer;
`;

const Buttons = ({ datesClick, datesHighlighted }) => (
  <Row>
    <Button onClick={datesClick} highlighted={datesHighlighted}>
      Dates
    </Button>
    <Button>Guests</Button>
    <Button className="hidden-xs hidden-sm hidden-md">Room type</Button>
    <Button className="hidden-xs hidden-sm hidden-md">Price</Button>
    <Button className="hidden-xs hidden-sm hidden-md">Instant book</Button>
    <Button>More filters</Button>
  </Row>
);

class Filters extends React.Component {
  state = {
    datePickerOpen: false
  };

  switchDatePicker = () => {
    this.setState(prevState => ({ datePickerOpen: !prevState.datePickerOpen }));
  };

  datePickerCancelClick = () => {
    this.setState(prevState => ({ datePickerOpen: false }));
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <Buttons
            datesClick={this.switchDatePicker}
            datesHighlighted={this.state.datePickerOpen}
          />
          {this.state.datePickerOpen && <DatePicker onCancelClick={this.datePickerCancelClick}/>}
        </Grid>
      </Wrapper>
    );
  }
}

export default Filters;
