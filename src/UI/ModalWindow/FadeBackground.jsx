import React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';

const Background = styled.div`
  z-index: 5;
  background-color: #ffffffaa;
  position: fixed;
  top: 8.5rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default () => (
  <Portal>
    <Background />
  </Portal>
)