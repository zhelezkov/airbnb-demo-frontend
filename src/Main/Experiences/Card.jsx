import React from 'react';
import styled from 'styled-components';
import Rating from '../../UI/Rating';
import { CardWrapper, Description, Image } from '../../styled';

const MainDescription = Description.withComponent('div');

const Price = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.h3`
  display: inline;
  font-size: 1rem;
  font-weight: 100;
`;

const Reviews = styled.span`
  text-decoration: none;
  color: #383838;
  font-weight: 200;
`;

export default props => (
  <CardWrapper href="#">
    <Image src={props.image} alt={props.title} />
    <MainDescription>
      <Price>{props.price}$</Price>
      <Title>{props.title}</Title>
    </MainDescription>
    <Description>
      <Rating stars={props.rating} />
      <Reviews>{props.reviewsCount} reviews</Reviews>
    </Description>
  </CardWrapper>
);
