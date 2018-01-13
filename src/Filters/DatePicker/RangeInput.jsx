import React from 'react';
import styled from 'styled-components';
import { START_DATE, END_DATE } from 'react-dates/constants';

import arrowRight from './arrow-right.svg';

const Wrapper = styled.div`
  margin-left: 0.5rem;
`;

const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  font-size: 1.125rem;
  font-weight: 100;
  border-bottom: 1px solid;
  outline: none;
  cursor: pointer;

  border-bottom-color: ${({ highlighted }) => (highlighted ? '#0F7276' : '#636363')};
  color: ${({ highlighted }) => (highlighted ? '#0F7276' : '#636363')};
`;

const Arrow = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const inputFormat = 'MMM DD';

export default ({ startDate, endDate, focus, onFocusChange }) => (
  <Wrapper>
    <Button highlighted={focus === START_DATE} onClick={() => onFocusChange(START_DATE)}>
      {startDate ? startDate.format(inputFormat) : 'Check-in'}
    </Button>
    <Arrow>
      <img src={arrowRight} alt="Arrow right" />
    </Arrow>
    <Button highlighted={focus === END_DATE} onClick={() => onFocusChange(END_DATE)}>
      {endDate ? endDate.format(inputFormat) : 'Check-out'}
    </Button>
  </Wrapper>
);
