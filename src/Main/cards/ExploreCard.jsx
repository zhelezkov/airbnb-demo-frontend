import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Title = styled.h3``;

const Container = styled.div`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  align-items: center;
  height: 72px;
  flex-wrap: nowrap;
`;

const Image = styled.img`
  position: relative;
  margin-right: 1.5rem;
  margin-left: -2px;
  border-radius: 4px 0 0 4px;
`;

export default props => (
  <Col xs={6} sm={6} md={5} lg={4}>
    <Container>
      <Image src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
    </Container>
  </Col>
);
