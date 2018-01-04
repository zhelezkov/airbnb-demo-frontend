import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowDescription = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Image = styled.img`
  margin-bottom: 0.1rem;
`;

const Price = styled.a`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.a`
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

const Rating = styled.label``;

const Reviews = styled.a`
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
  <Col xs={8} sm={8} md={5} lg={4}>
    <Container>
      <Image src={props.image} alt={props.title} />
      <RowDescription>
        <Price>{props.price}$</Price>
        <Title>{props.title}</Title>
      </RowDescription>
      <RowDescription>
        <HouseType>{props.houseType}</HouseType>
        ·
        <BedsNumber>{`${props.bedsCount} ${props.bedsCount > 1 ? 'beds' : 'bed'}`}</BedsNumber>
      </RowDescription>
      <RowDescription>
        <Rating stars={props.rating} />
        <Reviews href="#">{props.reviewsCount}</Reviews>
        ·
        <HostType>{props.hostType}</HostType>
      </RowDescription>
    </Container>
  </Col>
);
