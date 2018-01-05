import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { Link } from './common';

const Container = ({ children }) => (
  <Col mdOffset={1} lgOffset={1} md={2} lg={2}>
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
  <Container>
    <Nav>
      <Title href="#">Airbnb</Title>
      <Link href="#">About us</Link>
      <Link href="#">Careers</Link>
      <Link href="#">Press</Link>
      <Link href="#">Policies</Link>
      <Link href="#">Help</Link>
      <Link href="#">Diversity & Belonging</Link>
    </Nav>
  </Container>
);

const Discover = () => (
  <Container>
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
  </Container>
);

const Hosting = () => (
  <Container>
    <Nav>
      <Title href="#">Hosting</Title>
      <Link href="#">Why Host</Link>
      <Link href="#">Hospitality</Link>
      <Link href="#">Responsible Hosting</Link>
      <Link href="#">Community Center</Link>
    </Nav>
  </Container>
);

export default () => (
  <React.Fragment>
    <Airbnb />
    <Discover />
    <Hosting />
  </React.Fragment>
);
