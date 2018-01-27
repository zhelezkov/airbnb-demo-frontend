import React from 'react';
import styled from 'styled-components';
import Rating from '../UI/Rating';
import { CardWrapper, Image, Description } from '../styled';

const ShortDescription = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Price = styled.span`
  margin-right: 0.5rem;
  font-size: 1.0625rem;
  font-weight: bold;
`;

const Title = styled.h3`
  display: inline;
  font-size: 1.0625rem;
  font-weight: bold;
`;

const HouseType = styled.span`
  font-weight: 100;
  margin-right: 0.5rem;
`;

const BedsNumber = styled.span`
  font-weight: 100;
  margin-left: 0.5rem;
`;

const Reviews = styled.span`
  text-decoration: none;
  color: #383838;
  font-weight: 400;
  font-size: 0.9375rem;
  margin-right: 0.5rem;
`;

const HostType = styled.span`
  font-weight: 400;
  font-size: 0.9375rem;
  margin-left: 0.5rem;
`;

export default ({
  title, image, price, houseType, beds, rating, reviews, hostType,
}) => (
  <CardWrapper href="#">
    <Image src={image} alt={title} />
    <ShortDescription>
      <Price>{price}$</Price>
      <Title>{title}</Title>
    </ShortDescription>
    <Description>
      <HouseType>{houseType}</HouseType>
      ·
      <BedsNumber>{`${beds} ${beds > 1 ? 'beds' : 'bed'}`}</BedsNumber>
    </Description>
    <Description>
      <Rating stars={rating} />
      <Reviews>{reviews}</Reviews>
      ·
      <HostType>{hostType}</HostType>
    </Description>
  </CardWrapper>
);
