import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  ${({ mdSize }) => mdSize && 'justify-content: center;'};
`;

const Button = styled.button`
  padding: 1rem;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const ApplyButton = Button.extend`
  color: #fff;
  border-radius: 4px;
  background-color: #008489;
`;

export default ({ onCancel, onSave, mdSize }) => (
  <Wrapper mdSize={mdSize}>
    <Button onClick={onCancel}>Cancel</Button>
    <ApplyButton onClick={onSave}>See homes</ApplyButton>
  </Wrapper>
);
