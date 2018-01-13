import React from 'react';
import styled from 'styled-components';
import FadeBackground from './FadeBackground';
import ScrollLock from '../ScrollLock';

const Wrapper = styled.div`
  z-index: 100;
  display: flex;

  @media (max-width: 767px) {
    position: fixed;
    background-color: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border: 1px rgba(72, 72, 72, 0.2) solid;
    border-radius: 4px;
    padding: 0.5rem;
  }
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  border-top: 0.5px #d5d5d5 solid;
  padding: 0.5rem;
`;

const Content = styled.div`
  flex: 1 1 100%;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  color: #0f7276;
`;

const CloseButton = Button.extend`
  font-size: 1.5rem;
`;

const SaveButton = Button.extend`
  flex: 1 0 100%;
  color: #ffffff;
  background-color: #ff5a5f;
  padding: 0.85rem 8.25rem 0.85rem 8.25rem;
`;

export default class ModalWindow extends React.Component {
  renderModalWindow() {
    return (
      <Wrapper>
        <Header>
          <CloseButton onClick={this.props.onClose}>&#10005;</CloseButton>
          {this.props.title}
          <Button onClick={this.props.onReset}>Reset</Button>
        </Header>
        <Content>{this.props.children}</Content>
        <Footer>
          <SaveButton onClick={this.props.onSave}>Save</SaveButton>
        </Footer>
        <FadeBackground />
        <ScrollLock />
      </Wrapper>
    );
  }

  renderPopupWindow() {
    return (
      <Wrapper>
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
