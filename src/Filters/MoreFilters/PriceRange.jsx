import React from 'react';
import styled from 'styled-components';
import Price from '../Price/PureFilter';
import { Title } from './styled';

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px rgba(72, 72, 72, 0.3) solid;
`;

export default ({ onChange, min, max }) => (
  <Wrapper>
    <Title>Price range</Title>
    <Price onChange={onChange} min={min} max={max} />
  </Wrapper>
);
