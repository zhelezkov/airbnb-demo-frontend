import React from 'react';
import styled from 'styled-components';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import { MenuButton, FadeBackground } from './styled';
import ClickOutside from 'react-click-outside';

const InfoPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarButton = styled.button`
  appearance: none;
  border: none;
  padding: 1rem;
  color: ${({ color }) => color};
  cursor: pointer;
`;

const Wrapper = styled.aside`
  z-index: 10;
  background-color: #fff;
  position: absolute;
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

  datePickerToggle = () => {
    this.setState(prevState => ({ datePickerOpen: !prevState.datePickerOpen }));
  };

  closeDatePicker = () => {
    this.setState(prevState => ({ datePickerOpen: false }));
  };

  saveDates = () => {
    this.props.onDatesSave(this.state.startDate, this.state.endDate);
    this.closeDatePicker();
  };

  renderCalendarInfo = () => (
    <InfoPanel>
      <CalendarButton onClick={this.closeDatePicker}>Cancel</CalendarButton>
      <CalendarButton onClick={this.saveDates} color={'#0f7276'}>
        Apply
      </CalendarButton>
    </InfoPanel>
  );

  render() {
    return (
      <div>
        <ClickOutside onClickOutside={this.closeDatePicker}>
          <MenuButton onClick={this.datePickerToggle} highlighted={this.state.datePickerOpen}>
            Dates
          </MenuButton>
          {this.state.datePickerOpen && this.renderDatePicker()}
        </ClickOutside>
        {this.state.datePickerOpen && <FadeBackground />}
      </div>
    );
  }

  renderDatePicker() {
    return (
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
    );
  }
}

export default DatePicker;
