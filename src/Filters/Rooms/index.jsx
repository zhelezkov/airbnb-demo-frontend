import React from 'react';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import Selector from './Selector';

import entireHomeIcon from './icons/entireHome.svg';
import privateRoomIcon from './icons/privateRoom.svg';
import sharedRoomIcon from './icons/sharedRoom.svg';

export default class Rooms extends React.Component {
  state = {
    isOpen: false,
    entireHomeSelected: false,
    privateRoomSelected: false,
    sharedRoomSelected: false,
  };

  reset = () => {
    this.setState({
      entireHomeSelected: false,
      privateRoomSelected: false,
      sharedRoomSelected: false,
    });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  roomsSelectorToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  saveRooms = () => {
    const { entireHomeSelected, privateRoomSelected, sharedRoomSelected } = this.state;
    this.props.onSave(entireHomeSelected, privateRoomSelected, sharedRoomSelected);
    this.close();
  };

  toggleEntireHome = () => {
    this.setState(({ entireHomeSelected }) => ({ entireHomeSelected: !entireHomeSelected }));
  };

  togglePrivateRoom = () => {
    this.setState(({ privateRoomSelected }) => ({ privateRoomSelected: !privateRoomSelected }));
  };

  toggleSharedRoom = () => {
    this.setState(({ sharedRoomSelected }) => ({ sharedRoomSelected: !sharedRoomSelected }));
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
        <Selector
          title="Entire home"
          description="Have a place to yourself"
          checked={this.state.entireHomeSelected}
          icon={entireHomeIcon}
          onChange={this.toggleEntireHome}
        />
        <Selector
          title="Private room"
          description="Have your own room and share some common spaces"
          checked={this.state.privateRoomSelected}
          icon={privateRoomIcon}
          onChange={this.togglePrivateRoom}
        />
        <Selector
          title="Shared room"
          description="Stay in a shared space, like a common room"
          checked={this.state.sharedRoomSelected}
          icon={sharedRoomIcon}
          onChange={this.toggleSharedRoom}
        />
      </ModalWindow>
    );
  }

  render() {
    return (
      <div className="hidden-xs hidden-sm hidden-md">
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
