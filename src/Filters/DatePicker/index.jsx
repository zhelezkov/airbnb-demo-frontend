import React from 'react';
import { START_DATE } from 'react-dates/constants';
import Modal from '../Modal';
import DatePicker from './PureFilter';
import { getButtonTitle } from './helpers';
import InfoPanel from '../InfoPanel';

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: START_DATE,
};

export default class DatePickerController extends React.Component {
  state = initialState;

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onDatePickerFocusChange = (focusedInput) => {
    this.setState({ focusedInput: !focusedInput ? START_DATE : focusedInput });
  };

  onCancel = () => {
    this.setState({ ...this.props.getSavedState() });
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  save = () => {
    this.props.onSave(this.state);
    this.props.onClose();
  };

  render() {
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <Modal
        {...this.props}
        title="Dates"
        buttonTitle={getButtonTitle(startDate, endDate, this.props.isOpen)}
        onCancel={this.onCancel}
        onReset={this.reset}
        onSave={this.save}
        renderHeaderBorder={false}
      >
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          onDatesChange={this.onDatesChange}
          onDatePickerFocusChange={this.onDatePickerFocusChange}
        />
        <InfoPanel />
      </Modal>
    );
  }
}
