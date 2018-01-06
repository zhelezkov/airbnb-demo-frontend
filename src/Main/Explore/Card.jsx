import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);

  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  text-decoration: none;
  color: #383838;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 4.5rem;
    align-items: center;
  }
`;

const Image = styled.img`
  width: calc(100% + 2px);
  position: relative;
  margin-top: -2px;
  border-radius: 4px 4px 0 0;

  @media (min-width: 768px) {
    width: 96px;
    position: relative;
    margin-top: 0;
    margin-left: -2px;
    border-radius: 4px 0 0 4px;
  }
`;

const Title = styled.h3`
  margin-left: 1rem;
`;

export default props => (
  <Wrapper href="#" image={props.image}>
    <Image src={props.image} alt={props.title} />
    <Title>{props.title}</Title>
  </Wrapper>
);
