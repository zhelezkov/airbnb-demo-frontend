import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 2em;
  height: 2em;
  margin-right: 1rem;
  margin-left: 1rem;
  color: #008489;
  border: 1px solid #008489;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
  }
`;

const Value = styled.span`
  width: 1rem;
  text-align: center;
`;

const SelectorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default ({
  onIncrement, onDecrement, value, name, decrementDisabled,
}) => (
  <SelectorsWrapper>
    <Button name={name} onClick={onDecrement} disabled={decrementDisabled}>
      -
    </Button>
    <Value>
      {value}
    </Value>
    <Button name={name} onClick={onIncrement}>
      +
    </Button>
  </SelectorsWrapper>
);
