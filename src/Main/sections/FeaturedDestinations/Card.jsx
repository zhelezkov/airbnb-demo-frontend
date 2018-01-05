import React from 'react';
import styled from 'styled-components';
import { ColumnWrapper, Image } from '../common';

const Title = styled.a`
  font-weight: bold;
  font-size: 1.125rem;
`;

export default props => (
  <ColumnWrapper>
    <Image src={props.image} alt={props.title} />
    <Title>{props.title}</Title>
  </ColumnWrapper>
);
