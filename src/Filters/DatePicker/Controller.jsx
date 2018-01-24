import React from 'react';
import { START_DATE } from 'react-dates/constants';
import ModalContainer from '../ModalContainer';
import DatePicker from './index';
import { getButtonTitle } from './helpers';

export default class DatePickerController extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onDatePickerFocusChange = (focusedInput) => {
    this.setState({ focusedInput: !focusedInput ? START_DATE : focusedInput });
  };

  reset = () => {
    this.setState({ startDate: null, endDate: null, focusedInput: START_DATE });
  };

  saveDates = () => {
    this.props.onSave(this.state.startDate, this.state.endDate);
    this.props.onClose();
  };

  render() {
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <ModalContainer
        {...this.props}
        title="Dates"
        buttonTitle={getButtonTitle(startDate, endDate, this.props.isOpen)}
        onReset={this.reset}
        onSave={this.saveDates}
      >
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          onDatesChange={this.onDatesChange}
          onDatePickerFocusChange={this.onDatePickerFocusChange}
        />
      </ModalContainer>
    );
  }
}
