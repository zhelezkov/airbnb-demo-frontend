import React from 'react';
import styled from 'styled-components';

import icon from './icons/search.svg';

const Form = styled.form`
  display: flex;
  flex: 1 1 100%;
  box-sizing: border-box;
  max-width: 27rem;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  background: url(${icon}) no-repeat 1rem center;
`;

const Input = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  margin: 0.75rem 0.5rem 0.75rem 3rem;
  border: none;
  outline: none;
  color: #383838;
`;

export default () => (
  <Form>
    <Input placeholder="Try “Miami“" />
  </Form>
);
