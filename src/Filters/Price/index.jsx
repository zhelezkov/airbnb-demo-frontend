import React from 'react';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';

export default class Price extends React.Component {
  state = {
    isOpen: false,
  };

  reset = () => {};

  close = () => {
    this.reset();
    this.setState({ isOpen: false });
  };

  priceSelectorToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  savePrice = () => {};

  renderPriceSelector() {
    return (
      <ModalWindow
        title="Price"
        onClose={this.close}
        onReset={this.reset}
        onSave={this.savePrice}
        noClickOutside={this.toggleButton}
      />
    );
  }

  render() {
    return (
      <div className="hidden-xs hidden-sm hidden-md">
        <MenuButton
          onClick={this.priceSelectorToggle}
          highlighted={this.state.isOpen}
          innerRef={(toggleButton) => {
            this.toggleButton = toggleButton;
          }}
        >
          Room type
        </MenuButton>
        {this.state.isOpen && this.renderPriceSelector()}
      </div>
    );
  }
}
