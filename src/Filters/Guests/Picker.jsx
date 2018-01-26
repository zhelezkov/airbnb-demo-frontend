import React from 'react';
import styled from 'styled-components';
import ValueChanger from '../../UI/ValueChanger';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem 2rem 1.5rem;
`;

const Title = styled.p`
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  margin: 0;
  font-weight: 100;
`;

export default ({
  title,
  description,
  onIncrement,
  onDecrement,
  value,
  name,
  decrementDisabled,
}) => (
  <Wrapper>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <ValueChanger
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      value={value}
      name={name}
      decrementDisabled={decrementDisabled}
    />
  </Wrapper>
);
