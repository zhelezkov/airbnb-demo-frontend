import React from 'react';
import styled from 'styled-components';
import { CardWrapper, Image, Description } from '../../styled';

const SmallDescription = Description.extend`
  font-weight: bold;
  font-size: 0.625rem;
  margin-top: 0.5rem;
`;

const Title = styled.h3`
  display: inline;
  font-weight: bold;
  font-size: 1.125rem;
  margin: 0.5rem 0 0 0;
`;

const Price = styled.span`
  font-weight: 100;
  margin-top: 0.5rem;
`;

export default props => (
  <CardWrapper href="#">
    <Image src={props.image} alt={props.title} />
    <SmallDescription>{props.description}</SmallDescription>
    <Title>{props.title}</Title>
    <Price>About ${props.price} per person</Price>
  </CardWrapper>
);
