import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 20.375rem;
  margin: 2rem 1rem 2rem 1.5rem;
`;

const Title = styled.p`
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  margin: 0;
  font-weight: 100;
`;

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
`;

export default ({
  title, description, onIncrement, onDecrement, value,
}) => (
  <Wrapper>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <div>
      <Button onClick={onDecrement}>-</Button>
      {value}
      <Button onClick={onIncrement}>+</Button>
    </div>
  </Wrapper>
);
