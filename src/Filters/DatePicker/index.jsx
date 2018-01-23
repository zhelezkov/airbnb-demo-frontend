import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, VERTICAL_SCROLLABLE, HORIZONTAL_ORIENTATION } from 'react-dates/constants';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import { daysBeforeToday, getButtonTitle } from './helpers';
import RangeInput from './RangeInput';

class DatePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    isOpen: false,
    focusedInput: START_DATE,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput: !focusedInput ? START_DATE : focusedInput });
  };

  close = () => {
    this.reset();
    this.setState({ isOpen: false });
  };

  reset = () => {
    this.setState({ startDate: null, endDate: null, focusedInput: START_DATE });
  };

  saveDates = () => {
    this.props.onDatesSave(this.state.startDate, this.state.endDate);
    this.close();
  };

  xsCalendarProps = {
    orientation: VERTICAL_SCROLLABLE,
    numberOfMonths: 4,
  };

  mdCalendarProps = {
    orientation: HORIZONTAL_ORIENTATION,
    numberOfMonths: 1,
  };

  lgCalendarProps = {
    orientation: HORIZONTAL_ORIENTATION,
    numberOfMonths: 2,
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

  renderDatePicker() {
    const calendarProps = this.datePickerAdaptiveProps();
    const md = matchMedia('(min-width: 768px)').matches;
    const lg = matchMedia('(min-width: 992px)').matches;

    const { startDate, endDate, focusedInput } = this.state;

    return (
      <ModalWindow
        title="Dates"
        onClose={this.close}
        onReset={this.reset}
        onSave={this.saveDates}
        noClickOutside={this.toggleButton}
        renderHeaderBorder={false}
      >
        {!md &&
        !lg && (
          <RangeInput
            startDate={startDate}
            endDate={endDate}
            focus={focusedInput}
            onFocusChange={this.onFocusChange}
          />
        )}
        <DayPickerRangeController
          noBorder
          isOutsideRange={daysBeforeToday}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          hideKeyboardShortcutsPanel
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
          innerRef={(toggleButton) => {
            this.toggleButton = toggleButton;
          }}
        >
          {getButtonTitle(this.state.startDate, this.state.endDate, this.state.isOpen)}
        </MenuButton>
        {this.state.isOpen && this.renderDatePicker()}
      </div>
    );
  }
}

export default DatePicker;
