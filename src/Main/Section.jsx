import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

const Container = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
`;

export default props => (
  <Container>
    <Title>{props.title}</Title>
    <Row>
      <CardsContainer>{props.children}</CardsContainer>
    </Row>
  </Container>
);
