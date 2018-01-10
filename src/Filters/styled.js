import styled from 'styled-components';

export const MenuButton = styled.button`
  margin: 0.75rem;
  padding: 0.4375rem 1rem 0.4375rem 1rem;

  appearance: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${({ highlighted }) => (highlighted ? '#fff' : '#383838')};
  background-color: ${({ highlighted }) => (highlighted ? '#008489' : '#fff')};
  cursor: pointer;
`;

export const FadeBackground = styled.div`
  z-index: 5;
  background-color: #ffffffaa;
  position: fixed;
  top: 8.5rem;
  left: 0;
  right: 0;
  bottom: 0;
`;