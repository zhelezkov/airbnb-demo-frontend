import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  margin-right: 1.5rem;
  margin-bottom: 0.1rem;
`;

const Price = styled.a`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.a`
  font-weight: 100;
`;

const Rating = styled.label`
`;

const Reviews = styled.a`
  text-decoration: none;
  color: #383838;
  font-weight: 200;
`;

export default (props) => (
  <Col sm={6} md={4} lg={3}>
    <Container>
      <Image src={props.image} alt={props.title} />
      <RowContainer>
        <Price>{props.price}$</Price>
        <Title>{props.title}</Title>
      </RowContainer>
      <Rating stars={props.rating} />
      <Reviews href="#">{props.reviewsCount} reviews</Reviews>
    </Container>
  </Col>
);