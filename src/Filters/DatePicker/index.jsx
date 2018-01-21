import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, VERTICAL_SCROLLABLE, HORIZONTAL_ORIENTATION } from 'react-dates/constants';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import { daysBeforeToday, getButtonTitle } from './helpers';
import CalendarInfo from './CalendarInfo';
import RangeInput from './RangeInput';

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

  reset = () => {
    this.setState({ startDate: null, endDate: null, focusedInput: START_DATE });
  };

  cancel = () => {
    this.reset();
    this.close();
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
    renderCalendarInfo: CalendarInfo(this.cancel, this.saveDates)
  };

  lgCalendarProps = {
    orientation: HORIZONTAL_ORIENTATION,
    numberOfMonths: 2,
    renderCalendarInfo: CalendarInfo(this.cancel, this.saveDates)
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

  datePickerAdaptiveProps() {
    const md = matchMedia('(min-width: 768px)').matches;
    const lg = matchMedia('(min-width: 992px)').matches;

    if (lg) return this.lgCalendarProps;
    if (md) return this.mdCalendarProps;
    return this.xsCalendarProps;
  }

  renderDayRangeInput() {
    const md = matchMedia('(min-width: 768px)').matches;
    const lg = matchMedia('(min-width: 992px)').matches;

    const { startDate, endDate, focusedInput } = this.state;

    if (!md && !lg) {
      return (
        <RangeInput
          startDate={startDate}
          endDate={endDate}
          focus={focusedInput}
          onFocusChange={this.onFocusChange}
        />
      );
    }
  }

  renderDatePicker() {
    const calendarProps = this.datePickerAdaptiveProps();

    return (
      <ModalWindow
        title="Dates"
        onClose={this.close}
        onReset={this.reset}
        onSave={this.saveDates}
        noClickOutside={this.toggleButton}
      >
        {this.renderDayRangeInput()}
        <DayPickerRangeController
          noBorder={true}
          isOutsideRange={daysBeforeToday}
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
        <MenuButton
          onClick={this.datePickerToggle}
          highlighted={this.state.isOpen}
          innerRef={toggleButton => (this.toggleButton = toggleButton)}
        >
          {getButtonTitle(this.state.startDate, this.state.endDate, this.state.isOpen)}
        </MenuButton>
        {this.state.isOpen && this.renderDatePicker()}
      </div>
    );
  }
}

export default DatePicker;
