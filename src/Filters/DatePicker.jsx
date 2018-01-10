import React from 'react';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';

const InfoPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  padding: 1rem;
  color: ${({ color }) => color};
  cursor: pointer;
`;

const Wrapper = styled.div`
  z-index: 10;
  background-color: #fff;
  position: absolute;
`;

const Background = styled.div`
  z-index: 5;
  background-color: #ffffffaa;
  position: fixed;
  top: 8.5rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

class DatePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: START_DATE
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  renderCalendarInfo = () => (
    <InfoPanel>
      <Button onClick={this.props.onCancelClick}>Cancel</Button>
      <Button onClick={this.props.onDatesSave} color={'#0f7276'}>
        Apply
      </Button>
    </InfoPanel>
  );

  handleClickOutside = (ev) => {
    this.props.onCancelClick()
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <DayPickerRangeController
            numberOfMonths={matchMedia('(min-width: 992px)').matches ? 2 : 1}
            hideKeyboardShortcutsPanel
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={this.onFocusChange}
            renderCalendarInfo={this.renderCalendarInfo}
          />
        </Wrapper>
        <Background />
      </React.Fragment>
    );
  }
}

export default onClickOutside(DatePicker);
