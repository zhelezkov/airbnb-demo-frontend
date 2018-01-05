import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import Rating from '../../Rating';
import { ColumnWrapper, Image } from '../common';

const Description = styled.div`
  display: block;
`;

const Price = styled.a`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.a`
  font-weight: 100;
`;

const Reviews = styled.a`
  text-decoration: none;
  color: #383838;
  font-weight: 200;
`;

export default props => (
  <Col xs={6} sm={6} md={4} lg={3}>
    <ColumnWrapper>
      <Image src={props.image} alt={props.title} />
      <Description>
        <Price>{props.price}$</Price>
        <Title>{props.title}</Title>
      </Description>
      <Rating stars={props.rating} />
      <Reviews href="#">{props.reviewsCount} reviews</Reviews>
    </ColumnWrapper>
  </Col>
);
