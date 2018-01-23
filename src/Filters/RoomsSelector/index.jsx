import React from 'react';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import Selector from './Selector';

export default class RoomsSelector extends React.Component {
  state = {
    isOpen: false,
  };

  close = () => {
    this.reset();
    this.setState({ isOpen: false });
  };

  reset = () => {};

  roomsSelectorToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  saveRooms = () => {
  };

  renderRoomsSelector() {
    return (
      <ModalWindow
        title="Rooms"
        onClose={this.close}
        onReset={this.reset}
        onSave={this.saveRooms}
        noClickOutside={this.toggleButton}
      >
        <Selector title="Entire home" description="Have a place to yourself" />
      </ModalWindow>
    );
  }

  render() {
    return (
      <div>
        <MenuButton
          onClick={this.roomsSelectorToggle}
          highlighted={this.state.isOpen}
          innerRef={(toggleButton) => {
            this.toggleButton = toggleButton;
          }}
        >
          Room type
        </MenuButton>
        {this.state.isOpen && this.renderRoomsSelector()}
      </div>
    );
  }
}
