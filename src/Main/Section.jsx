import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

const Container = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

export default props => (
  <Container>
    <Title>{props.title}</Title>
    <Row>
      {props.children}
    </Row>
  </Container>
);
