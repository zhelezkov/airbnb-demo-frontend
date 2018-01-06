import React from 'react';
import styled from 'styled-components';

import arrowDown from './icons/arrowDown.svg';

const Button = styled.button`
  margin-right: 0.75rem;

  outline: none;
  border: none;
  cursor: pointer;
`;

export default () => (
  <Button className="hidden-lg hidden-xl">
    <img src={arrowDown} alt="Dropdown menu" />
  </Button>
);
