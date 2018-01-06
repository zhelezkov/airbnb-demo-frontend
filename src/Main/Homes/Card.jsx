import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import { CardWrapper, Image, Description } from '../styled';

const ShortDescription = Description.extend`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.h3`
  display: inline;
  font-size: 1rem;
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
  font-weight: 200;
  margin-right: 0.5rem;
`;

const HostType = styled.span`
  font-weight: 100;
  margin-left: 0.5rem;
`;

export default props => (
  <CardWrapper href="#">
    <Image src={props.image} alt={props.title} />
    <div>
      <Price>{props.price}$</Price>
      <Title>{props.title}</Title>
    </div>
    <ShortDescription>
      <HouseType>{props.houseType}</HouseType>
      ·
      <BedsNumber>{`${props.bedsCount} ${props.bedsCount > 1 ? 'beds' : 'bed'}`}</BedsNumber>
    </ShortDescription>
    <Description>
      <Rating stars={props.rating} />
      <Reviews href="#">{props.reviewsCount}</Reviews>
      ·
      <HostType>{props.hostType}</HostType>
    </Description>
  </CardWrapper>
);
