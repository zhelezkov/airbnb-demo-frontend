import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-weight: 400;
`;

const Description = styled.p`
  font-weight: 100;
`;

export default () => (
  <React.Fragment>
    <Title>Instant book</Title>
    <Description>Listings you can book without waiting for host approval.</Description>
  </React.Fragment>
);
