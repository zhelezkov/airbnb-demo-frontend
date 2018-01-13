import React from 'react';
import styled from 'styled-components';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, VERTICAL_SCROLLABLE, HORIZONTAL_ORIENTATION } from 'react-dates/constants';
import onClickOutside from 'react-onclickoutside';
import { MenuButton } from './styled';
import ModalWindow from '../UI/ModalWindow';
import { dayBeforeToday } from './helpers';

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

const mobileCalendarProps = {
  orientation: VERTICAL_SCROLLABLE,
  numberOfMonths: 4
};

const laptopCalendarProps = {
  orientation: HORIZONTAL_ORIENTATION,
  numberOfMonths: 1,
  renderCalendarInfo: this.renderCalendarInfo
};

const desktopCalendarProps = {
  orientation: HORIZONTAL_ORIENTATION,
  numberOfMonths: 2,
  renderCalendarInfo: this.renderCalendarInfo
};

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

  close = () => {
    this.setState(prevState => ({ datePickerOpen: false }));
  };

  saveDates = () => {
    this.props.onDatesSave(this.state.startDate, this.state.endDate);
    this.close();
  };

  reset = () => {
    this.setState({ startDate: null, endDate: null, focusedInput: START_DATE });
  };

  handleClickOutside = ev => {
    this.close();
  };

  componentDidMount() {
    window.addEventListener("resize", this.close);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.close);
  }

  renderCalendarInfo = () => (
    <InfoPanel>
      <CalendarButton onClick={this.close}>Cancel</CalendarButton>
      <CalendarButton onClick={this.saveDates} color={'#0f7276'}>
        Apply
      </CalendarButton>
    </InfoPanel>
  );

  renderDatePicker() {
    const mobile = matchMedia('(max-width: 767px)').matches;
    const laptop = matchMedia('(max-width: 991px)').matches;

    const platformProps = mobile ? mobileCalendarProps : laptop ? laptopCalendarProps : desktopCalendarProps;
    return (
      <ModalWindow title="Dates" onClose={this.close} onReset={this.reset} onSave={this.saveDates}>
        <DayPickerRangeController
          {...platformProps}
          noBorder
          isOutsideRange={dayBeforeToday}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          hideKeyboardShortcutsPanel={true}
        />
      </ModalWindow>
    );
  }

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
}

export default onClickOutside(DatePicker);
