import React from 'react';
import styled from 'styled-components';
import { CardWrapper, Image } from '../common';

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.1875rem;
  margin: 0.5rem 0 0 0;
`;

export default props => (
  <CardWrapper>
    <Image src={props.image} alt={props.title} />
    <Title>{props.title}</Title>
  </CardWrapper>
);
