import React from 'react';
import { DayPickerRangeController, DateRangePickerInputController } from 'react-dates';
import { START_DATE, VERTICAL_SCROLLABLE, HORIZONTAL_ORIENTATION } from 'react-dates/constants';
import onClickOutside from 'react-onclickoutside';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import { dayBeforeToday } from '../helpers';
import CalendarInfo from './CalendarInfo';

class DatePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    isOpen: false,
    focusedInput: START_DATE
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  saveDates = () => {
    this.props.onDatesSave(this.state.startDate, this.state.endDate);
    this.close();
  };

  xsCalendarProps = {
    orientation: VERTICAL_SCROLLABLE,
    numberOfMonths: 4
  };

  mdCalendarProps = {
    orientation: HORIZONTAL_ORIENTATION,
    numberOfMonths: 1,
    renderCalendarInfo: CalendarInfo(this.close, this.saveDates)
  };

  lgCalendarProps = {
    orientation: HORIZONTAL_ORIENTATION,
    numberOfMonths: 2,
    renderCalendarInfo: CalendarInfo(this.close, this.saveDates)
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput: !focusedInput ? START_DATE : focusedInput });
  };

  datePickerToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  reset = () => {
    this.setState({ startDate: null, endDate: null, focusedInput: START_DATE });
  };

  handleClickOutside = ev => {
    this.close();
  };

  componentDidMount() {
    window.addEventListener('resize', this.close);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.close);
  }

  datePickerAdaptiveProps() {
    const md = matchMedia('(min-width: 768px)').matches;
    const lg = matchMedia('(min-width: 992px)').matches;

    if (lg) return this.lgCalendarProps;
    if (md) return this.mdCalendarProps;
    return this.xsCalendarProps;
  }

  renderDatePicker() {
    const calendarProps = this.datePickerAdaptiveProps();

    return (
      <ModalWindow title="Dates" onClose={this.close} onReset={this.reset} onSave={this.saveDates}>
        <DayPickerRangeController
          noBorder={true}
          isOutsideRange={dayBeforeToday}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          hideKeyboardShortcutsPanel={true}
          {...calendarProps}
        />
      </ModalWindow>
    );
  }

  render() {
    return (
      <div>
        <MenuButton onClick={this.datePickerToggle} highlighted={this.state.isOpen}>
          Dates
        </MenuButton>
        {this.state.isOpen && this.renderDatePicker()}
      </div>
    );
  }
}

export default onClickOutside(DatePicker);