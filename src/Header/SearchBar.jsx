import React from 'react';
import styled from 'styled-components';
import icon from './icons/search.svg';

const Wrapper = styled.form`
  display: flex;
  flex-grow: 1;
  max-width: 24.5rem;
  height: 3rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  box-sizing: border-box;
  overflow: hidden;
  margin-right: 0.5rem;
`;

const Icon = styled.img`
  margin: 13px 16px 13px 16px;
`;

const Input = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  margin-right: 1rem;
  border: none;
  outline: none;
`;

export default () => (
  <Wrapper>
    <Icon src={icon} />
    <Input placeholder="Try “Miami“" />
  </Wrapper>
);
