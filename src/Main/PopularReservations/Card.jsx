import React from 'react';
import styled from 'styled-components';
import { CardWrapper, Image } from '../styled';

const Description = styled.span`
  font-weight: bold;
  font-size: 0.625rem;
`;

const Title = styled.h3`
  display: inline;
  font-weight: bold;
  font-size: 1.125rem;
  margin: 0;
`;

const Price = styled.span`
  font-weight: 100;
`;

export default props => (
  <CardWrapper href="#">
    <Image src={props.image} alt={props.title} />
    <Description>{props.description}</Description>
    <Title>{props.title}</Title>
    <Price>About ${props.price} per person</Price>
  </CardWrapper>
);
