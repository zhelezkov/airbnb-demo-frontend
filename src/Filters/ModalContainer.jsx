import React from 'react';
import ModalWindow from '../UI/ModalWindow';
import { MenuButton } from './styled';

export default class ModalContainer extends React.Component {
  onCancel = () => {
    this.props.onReset();
    this.props.onClose();
  };

  toggleWindow = () => {
    if (this.props.isOpen) {
      this.props.onClose();
    } else {
      this.props.onOpen();
    }
  };

  renderWindow() {
    const child = React.Children.only(this.props.children);
    return (
      <ModalWindow
        title={this.props.title}
        onCancel={this.onCancel}
        onClose={this.props.onClose}
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
