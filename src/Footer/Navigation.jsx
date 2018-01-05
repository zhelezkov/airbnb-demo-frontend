import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { Link } from './common';

const Wrapper = ({ children }) => (
  <Col mdOffset={1} lgOffset={1} md={2} lg={2} className="hidden-xs hidden-sm">
    {children}
  </Col>
);

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Title = Link.extend`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Airbnb = () => (
  <Nav>
    <Title href="#">Airbnb</Title>
    <Link href="#">About us</Link>
    <Link href="#">Careers</Link>
    <Link href="#">Press</Link>
    <Link href="#">Policies</Link>
    <Link href="#">Help</Link>
    <Link href="#">Diversity & Belonging</Link>
  </Nav>
);

const Discover = () => (
  <Nav>
    <Title href="#">Discover</Title>
    <Link href="#">Trust & Safety</Link>
    <Link href="#">Travel Credit</Link>
    <Link href="#">Gift Cards</Link>
    <Link href="#">Airbnb Citizen</Link>
    <Link href="#">Business Travel</Link>
    <Link href="#">Guidebooks</Link>
    <Link href="#">Airbnbmag</Link>
  </Nav>
);

const Hosting = () => (
  <Nav>
    <Title href="#">Hosting</Title>
    <Link href="#">Why Host</Link>
    <Link href="#">Hospitality</Link>
    <Link href="#">Responsible Hosting</Link>
    <Link href="#">Community Center</Link>
  </Nav>
);

export default () => (
  <React.Fragment>
    <Wrapper>
      <Airbnb />
    </Wrapper>
    <Wrapper>
      <Discover />
    </Wrapper>
    <Wrapper>
      <Hosting />
    </Wrapper>
  </React.Fragment>
);
