import React from 'react';
import styled from 'styled-components';
import Toggle from '../../UI/Toggle/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 20.375rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 400;
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 0.95rem;
  margin-right: 1rem;
`;

export default ({ onToggle, on }) => (
  <Wrapper>
    <Title>Instant book</Title>
    <Row>
      <Description>Listings you can book without waiting for host approval.</Description>
      <Toggle onClick={onToggle} on={on} />
    </Row>
  </Wrapper>
);
