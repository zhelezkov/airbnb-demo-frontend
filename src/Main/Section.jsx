import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

import arrowRight from './arrow-right.svg';

const Container = styled.section`
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

export default props => (
  <Container>
    <Header>
      <Title>{props.title}</Title>
      {props.seeAll && (
        <Link href="#">
          See All <img src={arrowRight} alt="See All" width={6} height={10}/>
        </Link>
      )}
    </Header>
    <Row>
      <CardsContainer>{props.children}</CardsContainer>
    </Row>
  </Container>
);
