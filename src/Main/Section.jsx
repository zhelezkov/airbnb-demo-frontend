import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

import arrowRight from './arrow-right.svg';

const Wrapper = styled.section`
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  flex: 1 1 auto;
  line-height: 1.3rem;
`;

const SeeAllLink = styled.a`
  text-decoration: none;
  color: #383838;
  white-space: nowrap;

  ::before {
    content: 'See All ';
  }

  ::after {
    display: inline-block;
    content: '';
    background-image: url(${arrowRight});
    background-size: 6px 10px;
    width: 6px;
    height: 10px;
  }
`;

export default ({ title, children }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Row>
      <Cards>{children}</Cards>
    </Row>
  </Wrapper>
);

export const SectionMore = ({ title, children }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      <SeeAllLink href="#" />
    </Header>
    <Row>
      <Cards>{children}</Cards>
    </Row>
  </Wrapper>
);
