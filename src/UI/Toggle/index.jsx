import React from 'react';
import styled from 'styled-components';

import cross from './cross.svg';
import tick from './tick.svg';

const Toggle = styled.button`
  appearance: none;
  padding: 0;
  border: 1px solid rgba(72, 72, 72, 0.3);
  background-color: rgba(72, 72, 72, 0.08);
  width: 4rem;
  height: 2.5rem;
  border-radius: 24px;
  cursor: pointer;
  
  flex-shrink: 0;

  &.on {
    background: #008489;
    border-color: #008489;
  }
`;

const Tumbler = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.3);
  width: 2.5rem;
  height: 2.5rem;
  top: -1px;
  left: -1px;
  border-radius: 24px;
  background: white;
  position: relative;
  transition: left 0.2s ease-in-out;

  ${Toggle}.on & {
    left: 23px;
    border-color: #008489;
  }
`;

const Icon = styled.img`
  position: relative;
  top: 12px;
`;

export default ({ onClick, on }) => (
  <Toggle onClick={onClick} className={on ? 'on' : ''}>
    <Tumbler>{on ? <Icon src={tick} /> : <Icon src={cross} />}</Tumbler>
  </Toggle>
);
