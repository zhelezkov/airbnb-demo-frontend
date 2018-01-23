import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})``;

const Title = styled.p`
  font-weight: 100;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-weight: 100;
  margin: 0;
`;

export default ({ title, description }) => (
  <Wrapper>
    <Checkbox />
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  </Wrapper>
);
