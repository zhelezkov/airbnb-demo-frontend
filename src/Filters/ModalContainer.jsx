import React from 'react';
import ModalWindow from '../UI/ModalWindow';
import { MenuButton } from './styled';

export default class ModalContainer extends React.Component {
  onWindowClose = () => {
    this.props.onReset();
    this.close();
  };

  open() {
    this.props.onOpen();
  }

  close() {
    this.props.onClose();
  }

  toggleWindow = () => {
    if (this.props.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  renderWindow() {
    const child = React.Children.only(this.props.children);
    return (
      <ModalWindow
        title={this.props.title}
        onClose={this.onWindowClose}
        onReset={this.props.onReset}
        onSave={this.props.onSave}
        noClickOutside={this.toggleButton}
        renderHeaderBorder={this.props.renderHeaderBorder}
      >
        {child}
      </ModalWindow>
    );
  }

  render() {
    return (
      <div>
        <MenuButton
          onClick={this.toggleWindow}
          highlighted={this.props.isOpen}
          innerRef={(toggleButton) => {
            this.toggleButton = toggleButton;
          }}
        >
          {this.props.buttonTitle}
        </MenuButton>
        {this.props.isOpen && this.renderWindow()}
      </div>
    );
  }
}
