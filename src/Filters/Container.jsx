import React from 'react';
import ModalWindow from '../UI/ModalWindow';
import { MenuButton } from './styled';

export default class FilterContainer extends React.Component {
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
    return (
      <ModalWindow
        title={this.props.title}
        onClose={this.props.onClose}
        onReset={this.props.onReset}
        onSave={this.props.onSave}
        noClickOutside={this.toggleButton}
        renderHeaderBorder={this.props.renderHeaderBorder}
      >
        {React.Children.map(this.props.children, (child) => {
          try {
            return React.cloneElement(child, { onCancel: this.onCancel });
          } catch (e) {
            return child;
          }
        })}
      </ModalWindow>
    );
  }

  render() {
    return (
      <div className={this.props.className}>
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
