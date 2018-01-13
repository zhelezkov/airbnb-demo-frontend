import styled from 'styled-components';

export const MenuButton = styled.button`
  margin: 0.75rem 0.375rem 0.75rem 0.375rem;
  padding: 0.4375rem 1rem 0.4375rem 1rem;

  appearance: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${({ highlighted }) => (highlighted ? '#fff' : '#383838')};
  background-color: ${({ highlighted }) => (highlighted ? '#008489' : '#fff')};
  cursor: pointer;
`;