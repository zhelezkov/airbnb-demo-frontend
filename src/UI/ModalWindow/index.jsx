import React from 'react';
import styled from 'styled-components';
import FadeBackground from './FadeBackground';

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    background-color: #fff;
    z-index: 100;
    border: 1px rgba(72, 72, 72, 0.2) solid;
    border-radius: 4px;
    padding: 0.5rem;
  }
`;

//TODO: for mobile
export default class ModalWindow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>{this.props.children}</Wrapper>
        <FadeBackground />
      </React.Fragment>
    );
  }
}
