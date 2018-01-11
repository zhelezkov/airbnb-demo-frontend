import React from 'react';
import styled from 'styled-components';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import onClickOutside from "react-onclickoutside";
import { MenuButton } from './styled';
import ModalWindow from '../UI/ModalWindow';

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
    this.setState({ focusedInput: !focusedInput ? START_DATE : focusedInput });
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

  handleClickOutside = ev => {
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
        <MenuButton onClick={this.datePickerToggle} highlighted={this.state.datePickerOpen}>
          Dates
        </MenuButton>
        {this.state.datePickerOpen && this.renderDatePicker()}
      </div>
    );
  }

  renderDatePicker() {
    const desktop = matchMedia('(min-width: 992px)').matches;
    const mobile = matchMedia('(max-width: 767px)').matches;
    return (
      <ModalWindow>
        <DayPickerRangeController
          noBorder
          numberOfMonths={desktop ? 2 : 1}
          hideKeyboardShortcutsPanel
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          renderCalendarInfo={this.renderCalendarInfo}
        />
      </ModalWindow>
    );
  }
}

export default onClickOutside(DatePicker);
