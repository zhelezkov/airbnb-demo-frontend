import React from 'react';
import Modal from '../Modal';
import Guests from './PureFilter';
import InfoPanel from '../InfoPanel';
import { getButtonTitle } from './helpers';

const initialState = {
  adultsCount: 0,
  childrenCount: 0,
  infantsCount: 0,
};

export default class GuestsController extends React.Component {
  state = initialState;

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

  increment = (type) => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  decrement = (type) => {
    this.setState(prevState => ({ [type]: prevState[type] - 1 }));
  };

  render() {
    const md = matchMedia('(min-width: 768px)').matches;

    const { adultsCount, childrenCount, infantsCount } = this.state;

    return (
      <Modal
        {...this.props}
        title="Guests"
        buttonTitle={getButtonTitle(adultsCount + childrenCount + infantsCount)}
        onCancel={this.onCancel}
        onReset={this.reset}
        onSave={this.save}
      >
        <Guests
          onIncrement={this.increment}
          onDecrement={this.decrement}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
          infantsCount={infantsCount}
        />
        {md && <InfoPanel />}
      </Modal>
    );
  }
}
