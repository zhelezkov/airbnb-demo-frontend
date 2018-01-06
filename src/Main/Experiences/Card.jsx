import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import { CardWrapper, Description, Image } from '../styled';

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
    <div>
      <Price>{props.price}$</Price>
      <Title>{props.title}</Title>
    </div>
    <Description>
      <Rating stars={props.rating} />
      <Reviews href="#">{props.reviewsCount} reviews</Reviews>
    </Description>
  </CardWrapper>
);
