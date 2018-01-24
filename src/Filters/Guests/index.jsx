import React from 'react';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import Picker from './Picker';

export default class Guests extends React.Component {
  state = {
    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,
  };

  onWindowClose = () => {
    this.reset();
    this.close();
  };

  close = () => {
    this.props.onClose('Guests');
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
    this.close();
  };

  incrementAdult = () => {
    this.setState(({ adultsCount }) => ({ adultsCount: adultsCount + 1 }));
  };

  decrementAdult = () => {
    this.setState(({ adultsCount }) => ({ adultsCount: adultsCount - 1 }));
  };

  incrementChildren = () => {
    this.setState(({ childrenCount }) => ({ childrenCount: childrenCount + 1 }));
  };

  decrementChildren = () => {
    this.setState(({ childrenCount }) => ({ childrenCount: childrenCount - 1 }));
  };

  incrementInfants = () => {
    this.setState(({ infantsCount }) => ({ infantsCount: infantsCount + 1 }));
  };

  decrementInfants = () => {
    this.setState(({ infantsCount }) => ({ infantsCount: infantsCount - 1 }));
  };

  renderGuestsPicker() {
    return (
      <ModalWindow
        title="Guests"
        onClose={this.onWindowClose}
        onReset={this.reset}
        onSave={this.saveGuests}
        noClickOutside={this.toggleButton}
      >
        <Picker
          title="Adults"
          onIncrement={this.incrementAdult}
          onDecrement={this.decrementAdult}
          value={this.state.adultsCount}
        />
        <Picker
          title="Children"
          description="Ages 2 – 12"
          onIncrement={this.incrementChildren}
          onDecrement={this.decrementChildren}
          value={this.state.childrenCount}
        />
        <Picker
          title="Infants"
          description="Under 2"
          onIncrement={this.incrementInfants}
          onDecrement={this.decrementInfants}
          value={this.state.infantsCount}
        />
      </ModalWindow>
    );
  }

  render() {
    return (
      <div>
        <MenuButton
          onClick={this.guestsChooserToggle}
          highlighted={this.state.isOpen}
          innerRef={(toggleButton) => {
            this.toggleButton = toggleButton;
          }}
        >
          Guests
        </MenuButton>
        {this.state.isOpen && this.renderGuestsPicker()}
      </div>
    );
  }
}
