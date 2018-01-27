import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

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

export const CenterRow = styled(Row)`
  align-items: center;
  flex-wrap: nowrap;
`;
