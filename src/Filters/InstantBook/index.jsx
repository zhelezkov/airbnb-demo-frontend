import React from 'react';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';

export default class InstantBook extends React.Component {
  state = {
    isOpen: false,
  };

  reset = () => {};

  close = () => {
    this.reset();
    this.setState({ isOpen: false });
  };

  instantBookToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  saveBooking = () => {};

  renderInstantBookSelector() {
    return (
      <ModalWindow
        title="Instant book"
        onClose={this.close}
        onReset={this.reset}
        onSave={this.saveBooking}
        noClickOutside={this.toggleButton}
      />
    );
  }

  render() {
    return (
      <div className="hidden-xs hidden-sm hidden-md">
        <MenuButton
          onClick={this.instantBookToggle}
          highlighted={this.state.isOpen}
          innerRef={(toggleButton) => {
            this.toggleButton = toggleButton;
          }}
        >
          Instant book
        </MenuButton>
        {this.state.isOpen && this.renderInstantBookSelector()}
      </div>
    );
  }
}
