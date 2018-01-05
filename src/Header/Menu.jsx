import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  font-size: 0.9rem;
`;

const Link = styled.a`
  font-weight: 400;
  color: #383838;
  text-decoration: none;
  margin-right: 0.5rem;
`;

export default () => (
  <Nav className="hidden-xs hidden-sm hidden-md">
    <Link href="#">Become a host</Link>
    <Link href="#">Help</Link>
    <Link href="#">Sign Up</Link>
    <Link href="#">Log In</Link>
  </Nav>
);
