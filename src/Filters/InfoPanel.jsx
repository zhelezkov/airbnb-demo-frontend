import React from 'react';
import styled from 'styled-components';

const InfoPanel = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: #008489;
`;

export default ({ onCancel, onApply }) => (
  <InfoPanel>
    <Button onClick={onCancel}>Cancel</Button>
    <ApplyButton onClick={onApply}>Apply</ApplyButton>
  </InfoPanel>
);
