import React from 'react';
import ModalContainer from '../ModalContainer';
import Guests from './index';

export default class GuestsController extends React.Component {
  state = {
    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,
  };

  reset = () => {
    this.setState({ adultsCount: 0, childrenCount: 0, infantsCount: 0 });
  };

  guestsChooserToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  saveGuests = () => {
    const { adultsCount, childrenCount, infantsCount } = this.state;
    this.props.onSave(adultsCount, childrenCount, infantsCount);
    this.props.onClose();
  };

  increment = (type) => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  decrement = (type) => {
    this.setState(prevState => ({ [type]: prevState[type] - 1 }));
  };

  render() {
    const { adultsCount, childrenCount, infantsCount } = this.state;
    return (
      <ModalContainer
        {...this.props}
        title="Guests"
        buttonTitle="Guests"
        onReset={this.reset}
        onSave={this.saveDates}
      >
        <Guests
          onIncrement={this.increment}
          onDecrement={this.decrement}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
          infantsCount={infantsCount}
        />
      </ModalContainer>
    );
  }
}
