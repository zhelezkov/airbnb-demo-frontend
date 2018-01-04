import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-bottom: 0.1rem;
`;

const Title = styled.a`
  font-weight: bold;
  font-size: 1.125rem;  
`;

export default props => (
  <Col xs={4} sm={4} md={3} lg={2}>
    <Container>
      <Image src={props.image} alt={props.title} />
      <Title>{props.title}</Title>
    </Container>
  </Col>
);
