import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  
  border-bottom: 1px rgba(72, 72, 72, 0.3) solid;
`;

export const Title = styled.h3`
  font-weight: 400;
  margin: 0 0 1.5rem;
  align-self: flex-start;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`;
