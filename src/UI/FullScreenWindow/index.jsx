import React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9999;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const CloseButton = styled.button`
  appearance: none;
  border: none;
`;

//props: title
export default class FullScreenWindow extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <CloseButton>close</CloseButton>
          {this.props.title}
          <button>Reset</button>
        </Header>
      </Wrapper>
    );
  }
}
