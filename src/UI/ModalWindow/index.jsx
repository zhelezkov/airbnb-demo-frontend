import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { Portal } from 'react-portal';
import FadeBackground from './FadeBackground';
import ScrollLock from './ScrollLock';

const Wrapper = styled.div`
  z-index: 2000;
  position: fixed;
  background-color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (min-width: 768px) {
    position: absolute;
    ${({ fillAllSpace }) => (!fillAllSpace && 'border: 1px rgba(72, 72, 72, 0.2) solid;')};
    border-radius: 4px;
    min-width: 20.375rem;
    top: initial;
    right: ${({ fillAllSpace }) => (fillAllSpace ? 0 : 'initial')};
    bottom: initial;
    left: ${({ fillAllSpace }) => (fillAllSpace ? 0 : 'initial')};
    ${({ fillAllSpace }) => (fillAllSpace && `
      background-color: transparent;
    `)};
  }
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  ${({ border }) => border && 'border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);'};
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 0.5px #d5d5d5 solid;
  padding: 0.5rem;
  background: #fff;
`;

const Content = styled.div`
  position: absolute;
  top: 3.875rem;
  bottom: 5rem;
  width: 100%;

  @media (min-width: 768px) {
    position: initial;
    padding-top: 0.01rem;
  }
`;

const Button = styled.button`
  appearance: none;
  border: none;
  color: #0f7276;
  cursor: pointer;
`;

const CloseButton = Button.extend`
  font-size: 1.5rem;
`;

const SaveButton = Button.extend`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;

  color: #ffffff;
  background-color: #ff5a5f;
  padding: 0.85rem 8.25rem 0.85rem 8.25rem;
`;

class ModalWindow extends React.Component {
  static defaultProps = {
    renderHeaderBorder: true,
    renderInfoPanel: true,
  };

  handleClickOutside = (ev) => {
    if (ev.target.name !== 'filterButton') {
      this.props.onClose();
    }
  };

  renderModalWindow() {
    return (
      <Portal>
        <Wrapper role="dialog">
          <Header border={this.props.renderHeaderBorder}>
            <CloseButton onClick={this.props.onClose}>&#10005;</CloseButton>
            {this.props.title}
            <Button onClick={this.props.onReset}>Reset</Button>
          </Header>
          <Content>{this.props.children}</Content>
          <Footer>
            <SaveButton onClick={this.props.onSave}>Save</SaveButton>
          </Footer>
          <ScrollLock />
        </Wrapper>
      </Portal>
    );
  }

  renderPopupWindow() {
    return (
      <Wrapper fillAllSpace={this.props.fillAllSpace}>
        <Content>{this.props.children}</Content>
        <FadeBackground />
      </Wrapper>
    );
  }

  render() {
    const md = matchMedia('(min-width: 768px)').matches;

    if (md) return this.renderPopupWindow();
    return this.renderModalWindow();
  }
}

export default onClickOutside(ModalWindow);
