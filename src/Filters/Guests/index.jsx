import React from 'react';
import { MenuButton } from '../styled';
import ModalWindow from '../../UI/ModalWindow';
import Picker from './Picker';
import InfoPanel from '../InfoPanel';

export default class Guests extends React.Component {
  state = {
    isOpen: false
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  reset = () => {};

  guestsChooserToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  saveGuests = () => {};

  renderGuestsPicker() {
    const md = matchMedia('(min-width: 768px)').matches;

    return (
      <ModalWindow
        title="Dates"
        onClose={this.close}
        onReset={this.reset}
        onSave={this.saveGuests}
        noClickOutside={this.toggleButton}
        headerBorder={true}
      >
        <Picker title="Adults" />
        <Picker title="Children" description="Ages 2 – 12" />
        <Picker title="Infants" description="Under 2" />
        {md && <InfoPanel />}
      </ModalWindow>
    );
  }

  render() {
    return (
      <div>
        <MenuButton
          onClick={this.guestsChooserToggle}
          highlighted={this.state.isOpen}
          innerRef={toggleButton => (this.toggleButton = toggleButton)}
        >
          Guests
        </MenuButton>
        {this.state.isOpen && this.renderGuestsPicker()}
      </div>
    );
  }
}
