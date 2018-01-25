import React from 'react';
import { START_DATE } from 'react-dates/constants';
import Container from '../Container';
import DatePicker from './index';
import { getButtonTitle } from './helpers';
import InfoPanel from '../InfoPanel';

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

  save = () => {
    this.props.onSave(this.state.startDate, this.state.endDate);
    this.props.onClose();
  };

  render() {
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <Container
        {...this.props}
        title="Dates"
        buttonTitle={getButtonTitle(startDate, endDate, this.props.isOpen)}
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
        <InfoPanel onCancel={this.props.onCancel} onApply={this.save} />
      </Container>
    );
  }
}
