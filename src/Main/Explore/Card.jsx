import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;

  text-decoration: none;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  color: #383838;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  position: relative;
  width: calc(100% + 2px);
  margin-top: -2px;
  border-radius: 4px 4px 0 0;

  @media (min-width: 768px) {
    position: relative;
    width: 6rem;
    margin-top: 0;
    margin-left: -2px;
    border-radius: 4px 0 0 4px;
  }
`;

const Title = styled.h3`
  margin-left: 1rem;
`;

export default ({ title, image, link }) => (
  <Wrapper to={link}>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
  </Wrapper>
);
