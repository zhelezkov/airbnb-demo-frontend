import React from 'react';
import styled from 'styled-components';

const InfoPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarButton = styled.button`
  padding: 1rem;
  appearance: none;
  background: none;
  border: none;
  color: ${({ color }) => color};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export default (onClose, onApply) => {
  return () => (
    <InfoPanel>
      <CalendarButton onClick={onClose}>Cancel</CalendarButton>
      <CalendarButton onClick={onApply} color={'#0f7276'}>
        Apply
      </CalendarButton>
    </InfoPanel>
  );
};
